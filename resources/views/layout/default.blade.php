<!DOCTYPE html>
<html lang="en-US">
@include('partials.head')

<body class="">

      @foreach($posts as $post)
      test
      @endforeach
      @include('partials.header')
      @include('partials.posts')

      @include('partials.footer')
</body>

</html>


<script setup>
const navigation = [{
            name: 'Solutions',
            href: '#'
      },
      {
            name: 'Pricing',
            href: '#'
      },
      {
            name: 'Docs',
            href: '#'
      },
      {
            name: 'Company',
            href: '#'
      },
]
</script>