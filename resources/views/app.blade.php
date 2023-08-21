<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="min-h-screen">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="locale" property= "og:locale" content="en_US">
        <meta name="type" property= "og:type" content="website">
        <meta name="url" property="og:url" content="https://web.gtls.au" />
        <meta name="site_name" property="og:site_name" content="GTLS" />
        <meta name="image" property="og:image" content="{{ asset('favicon.ico') }}" />
        <meta name="title" property= "og:title" content="Gold Tiger Logistics Solutions">
        <meta name="description" property= "og:description" content="SMARTER SUPPLY CHAIN MANAGEMENTTHIRD PARTY LOGISTICS SPECIALISTS In case of Emergency or Breakdown contact 0450 033 222 Transport and logistics solutions tailored to your needs Gold Tiger Logistics Solutions partners with FMCG, food, packaging, manufacturing, retail, industrial and other companies who operate statewide or nationwide and often 24/7. No two customers are the same, so … Home Read More »">

        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0KMJRECLV1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0KMJRECLV1');
</script>

        <title inertia>{{ config('app.name', 'GTLS') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased min-h-screen">
        @inertia
    </body>
</html>
