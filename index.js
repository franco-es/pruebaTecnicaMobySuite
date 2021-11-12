jQuery(function ($) {
  $().ready(function () {
    var names = [];

    var compare = [];

    $.ajax({
      url: "https://randomuser.me/api/?results=20",
      data: "json",
      success: function (response) {
        const nameJSON = response.results;
        $.each(nameJSON, function (i, items) {
          let itemName = nameJSON[i].name;
          let itemAge = nameJSON[i].dob;
          var name = itemName.first;
          var age = itemAge.age;
          var itemJSON = {};
          $.ajax({
            url: `https://api.agify.io?name=${name}`,
            success: function (response) {
              itemJSON["name"] = name;
              itemJSON["ageReal"] = age;
              itemJSON["ageApi"] = response.age;
              names.push(itemJSON);
            },
          });
        });
      },
    });
    console.log(names);
  });
});
