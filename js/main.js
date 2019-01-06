new Vue({
    el: '#app',
    data: {
        fileUrl: 'https://drive.google.com/uc?authuser=0&export=download&id=1UusVthMHS1uzHke_7ZCqcDdGWPhe3SAp',
        some: 'Hello!',
        count: 0,
        items: [
            'Some',
            'Elements',
            'Inside',
            'Some',
            'Elements',
            'Inside',
            'Some',
            'Elements',
            'Inside',
            'Some',
            'Elements',
            'Inside',
            'Some',
            'Elements',
            'Inside'
        ]
    },
    methods: {
        iterate: function () {
            this.count += 110;
        },
        clear: function () {
            this.count = 0;
        },
        loadFile: function () {
            fetch(this.fileUrl, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    some = myJson;
                    alert(myJson);
                })
                .catch(function (e) {
                    alert(e);
                });
        }
    },
    created: function () {
        // alert("On create");
    }
});