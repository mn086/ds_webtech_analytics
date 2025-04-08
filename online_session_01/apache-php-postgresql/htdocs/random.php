<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #e6f3ff;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        body.night-mode {
            background-color: #1a1a2e;
            color: #ffffff;
        }
        .random-number {
            font-size: 3em;
            color: #0066cc;
            padding: 20px;
            border: 2px solid #0066cc;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .night-mode .random-number {
            background-color: #16213e;
            color: #4cc9f0;
            border-color: #4cc9f0;
        }
        .title {
            color: #0066cc;
            margin-bottom: 20px;
            transition: color 0.3s ease;
        }
        .night-mode .title {
            color: #4cc9f0;
        }
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #0066cc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .theme-toggle:hover {
            background-color: #0052a3;
        }
        .night-mode .theme-toggle {
            background-color: #4cc9f0;
        }
        .night-mode .theme-toggle:hover {
            background-color: #3aa8d8;
        }
    </style>
</head>
<body>
    <button class="theme-toggle" onclick="toggleNightMode()">🌙 Night Mode</button>
    <h1 class="title">Random Number Generator</h1>
    <div class="random-number">
        <?php
            $random_number = rand(1, 1000);
            echo $random_number;
        ?>
    </div>

    <script>
        function toggleNightMode() {
            document.body.classList.toggle('night-mode');
            const button = document.querySelector('.theme-toggle');
            if (document.body.classList.contains('night-mode')) {
                button.textContent = '☀️ Day Mode';
            } else {
                button.textContent = '🌙 Night Mode';
            }
        }
    </script>
</body>
</html>
