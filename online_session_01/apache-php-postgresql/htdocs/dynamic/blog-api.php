<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$blog_posts = [
    [
        'id' => 1,
        'title' => 'PHP Grundlagen',
        'content' => 'PHP ist eine weit verbreitete Skriptsprache, die speziell für die Webentwicklung geeignet ist. Lernen Sie die Grundlagen der PHP-Programmierung und wie Sie dynamische Webseiten erstellen können.',
        'image' => 'https://picsum.photos/800/400?random=1',
        'date' => '2024-03-20',
        'author' => 'Max Mustermann',
        'category' => 'Programmierung'
    ],
    [
        'id' => 2,
        'title' => 'MySQL Datenbanken',
        'content' => 'MySQL ist eines der beliebtesten Datenbankmanagementsysteme. Entdecken Sie, wie Sie effizient mit MySQL arbeiten und Ihre Daten optimal strukturieren können.',
        'image' => 'https://picsum.photos/800/400?random=2',
        'date' => '2024-03-21',
        'author' => 'Erika Musterfrau',
        'category' => 'Datenbanken'
    ],
    [
        'id' => 3,
        'title' => 'Web Security Best Practices',
        'content' => 'Sicherheit im Web ist von entscheidender Bedeutung. Erfahren Sie mehr über die wichtigsten Sicherheitsmaßnahmen und wie Sie Ihre Webanwendungen schützen können.',
        'image' => 'https://picsum.photos/800/400?random=3',
        'date' => '2024-03-22',
        'author' => 'Thomas Sicher',
        'category' => 'Sicherheit'
    ],
    [
        'id' => 4,
        'title' => 'Responsive Webdesign',
        'content' => 'Responsive Design ist ein Muss für moderne Webseiten. Lernen Sie die Techniken kennen, mit denen Sie Webseiten erstellen, die auf allen Geräten optimal aussehen.',
        'image' => 'https://picsum.photos/800/400?random=4',
        'date' => '2024-03-23',
        'author' => 'Lisa Designer',
        'category' => 'Design'
    ],
    [
        'id' => 5,
        'title' => 'JavaScript Frameworks',
        'content' => 'Moderne JavaScript-Frameworks wie React, Vue und Angular revolutionieren die Webentwicklung. Entdecken Sie die Vor- und Nachteile der verschiedenen Frameworks.',
        'image' => 'https://picsum.photos/800/400?random=5',
        'date' => '2024-03-24',
        'author' => 'Jan Entwickler',
        'category' => 'Frontend'
    ]
];

echo json_encode(['posts' => $blog_posts], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?> 