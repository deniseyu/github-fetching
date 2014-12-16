  $('#fetch_github_profile').on('click', function(){
      var profile_name = $('#profile_name').val();
      var source = $('#profileTemplate').html();
      var template = Handlebars.compile(source);
      $.get('https://api.github.com/users/' + profile_name + '?client_id=?9a318764c4d9fd84b19d&client_secret=e46387ab354464abc3b973331ab2ca50f1ecc862', function(githubProfile) {
        $('#profiles').append(template(githubProfile));
    });

  });
