<?php
header('Content-Type: application/json');

$url = 'http://host.docker.internal:9876/api/data';

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json'
]);

// Execute cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo json_encode([
        'status' => 'error',
        'message' => 'cURL Error: ' . curl_error($ch)
    ]);
} else {
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo json_encode([
        'status' => $httpCode >= 200 && $httpCode < 300 ? 'success' : 'error',
        'http_code' => $httpCode,
        'response' => json_decode($response, true),
        'raw_response' => $response
    ]);
}

// Close cURL session
curl_close($ch);
?> 