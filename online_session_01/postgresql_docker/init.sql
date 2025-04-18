-- Create test user with password
CREATE USER testuser WITH PASSWORD 'testpassword';

-- Grant privileges to test user on test database
GRANT ALL PRIVILEGES ON DATABASE testdb TO testuser;

-- Connect to test database
\c testdb

-- Create test table
CREATE TABLE test_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    post_date DATE NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Grant privileges on test table to test user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO testuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO testuser;

-- Update pg_hba.conf to allow connections from all addresses
ALTER SYSTEM SET listen_addresses TO '*';

-- Insert some sample data
INSERT INTO test_table (name, description) VALUES 
('Test Item 1', 'This is the first test item swi'),
('Test Item 2', 'This is the second test item'),
('Test Item 3', 'This is the third test item');

INSERT INTO blog_posts (title, content, image_url, post_date, author, category) VALUES
('PHP Grundlagen', 
'PHP ist eine weit verbreitete Skriptsprache, die speziell für die Webentwicklung geeignet ist. Lernen Sie die Grundlagen der PHP-Programmierung und wie Sie dynamische Webseiten erstellen können.',
'https://picsum.photos/800/400?random=1',
'2024-03-20',
'Max Mustermann',
'Programmierung'),

('MySQL Datenbanken',
'MySQL ist eines der beliebtesten Datenbankmanagementsysteme. Entdecken Sie, wie Sie effizient mit MySQL arbeiten und Ihre Daten optimal strukturieren können.',
'https://picsum.photos/800/400?random=2',
'2024-03-21',
'Erika Musterfrau',
'Datenbanken'),

('Web Security Best Practices',
'Sicherheit im Web ist von entscheidender Bedeutung. Erfahren Sie mehr über die wichtigsten Sicherheitsmaßnahmen und wie Sie Ihre Webanwendungen schützen können.',
'https://picsum.photos/800/400?random=3',
'2024-03-22',
'Thomas Sicher',
'Sicherheit'),

('Responsive Webdesign',
'Responsive Design ist ein Muss für moderne Webseiten. Lernen Sie die Techniken kennen, mit denen Sie Webseiten erstellen, die auf allen Geräten optimal aussehen.',
'https://picsum.photos/800/400?random=4',
'2024-03-23',
'Lisa Designer',
'Design'),

('JavaScript Frameworks',
'Moderne JavaScript-Frameworks wie React, Vue und Angular revolutionieren die Webentwicklung. Entdecken Sie die Vor- und Nachteile der verschiedenen Frameworks.',
'https://picsum.photos/800/400?random=5',
'2024-03-24',
'Jan Entwickler',
'Frontend'); 