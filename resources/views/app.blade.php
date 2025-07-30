<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue + Laravel</title>

    <!-- Tailwind CDN -->
    <script type="module">
        import "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
    </script>

    <script type="tailwind-config">
    export default {
      theme: {
        extend: {
          colors: {
            primary: '#1e40af',
          },
        },
      },
    }
  </script>
</head>

<body class="bg-[#F9FAFB] text-gray-900">
    <div id="app"></div>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</body>
</html>
