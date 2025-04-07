<?php
// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Database connection parameters
$host = "host.docker.internal"; // Special Docker hostname to reach the host machine
$port = "5432";
$dbname = "testdb";
$user = "postgres";
$password = "postgres";

try {
    // Create PDO connection
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute the query
    $stmt = $pdo->prepare("
        SELECT 
            id,
            title,
            content,
            image_url as image,
            post_date as date,
            author,
            category
        FROM blog_posts 
        ORDER BY post_date DESC
    ");
    
    $stmt->execute();
    
    // Fetch all posts
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Format the response
    $response = [
        'posts' => $posts
    ];
    
    // Output the JSON
    echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch(PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode([
        'error' => 'Database error',
        'message' => $e->getMessage()
    ]);
}
?> 