// vars

let duck;
let gender;
let nameTarget = $('#name');
let button = $('button');

button.on("click", function () {
    let nameHtml = `<h1>Considering names...</h1>`;
    nameTarget.html(nameHtml);
    gender = $("main").find("input:checked").val();

    $.ajax({
        url: `https://randomuser.me/api/?gender=${gender}`,
        dataType: 'json',
        success: function (data) {
            duck = data.results[0].name.first;
            nameHtml = `<h1>Your Duck's name is ${duck}</h1>`
            nameTarget.html(nameHtml)
            button.html("Don't like it? <br> Rename that duck")
        }
    });
});

var tl = gsap.timeline({
    repeat: -1,
    ease: "power1.inOut"
});
tl.yoyo(true);
tl.timeScale(.35)
tl.fromTo("img", {
    rotation: -12
}, {
    rotation: 15
});