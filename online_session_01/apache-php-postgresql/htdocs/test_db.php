<?php
// Test file to verify PHP and PostgreSQL functionality

// Display PHP information in a restricted way
echo "<h1>PHP with PostgreSQL Docker Setup</h1>";
echo "<h2>PHP Version: " . phpversion() . "</h2>";

// Show loaded PHP modules
echo "<h2>Loaded Extensions:</h2>";
echo "<ul>";
$extensions = get_loaded_extensions();
sort($extensions);
foreach ($extensions as $extension) {
    if (in_array($extension, ['pgsql', 'pdo_pgsql', 'pdo'])) {
        echo "<li><strong>$extension</strong></li>";
    }
}
echo "</ul>";

// Connection test function
function testPostgresConnection() {
    // Connection parameters - modify these to match your PostgreSQL setup
    $host = "host.docker.internal"; // Special Docker hostname to reach the host machine
    $port = "5432";
    $dbname = "testdb";
    $user = "testuser";
    $password = "testpassword";

    try {
        // Create connection
        $conn = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
        
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        echo "<div style='color:green'>Successfully connected to PostgreSQL database!</div>";
        
        // Test query
        $stmt = $conn->query("SELECT id, name, description FROM test_table");
        
        // Display results
        echo "<h3>Data from test_table:</h3>";
        echo "<table border='1' cellpadding='5'>";
        echo "<tr><th>ID</th><th>Name</th><th>Description</th></tr>";
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['id']) . "</td>";
            echo "<td>" . htmlspecialchars($row['name']) . "</td>";
            echo "<td>" . htmlspecialchars($row['description']) . "</td>";
            echo "</tr>";
        }
        
        echo "</table>";
        
    } catch (PDOException $e) {
        echo "<div style='color:red'>Connection failed: " . $e->getMessage() . "</div>";
        echo "<p>Ensure your PostgreSQL server is running and accessible at $host:$port</p>";
    }
    
    // Close connection
    $conn = null;
}

// Execute connection test
echo "<h2>PostgreSQL Connection Test:</h2>";
echo "<p>Attempting to connect to PostgreSQL and fetch data from test_table...</p>";
testPostgresConnection();
?>