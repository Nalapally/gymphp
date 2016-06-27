
$(document).ready(function(e){

        // Date picker
        $('#fromDate,#toDate').datepicker();

        // Data Table
        $('#example').DataTable();

        $(".data").hide();

        $("#main-content-div").show();

        $("#main-content").click(function(e){
            $(".data").hide();
            $("#main-content-div").show();
        });
        $("#create-member").click(function(e){
            $(".data").hide();
            $("#create-member-div").show();
        });
        $("#search-member").click(function(e){
            $(".data").hide();
            $("#search-member-div").show();
        });
        $("#report").click(function(e){
            $(".data").hide();
            $("#report-div").show();
        });
        $("#create-member-submit").click(function(e){
            //e.preventDefault();
        });

        $( "#create-member-submit" ).click(function( event ) {

            var memberName = $("#memberName").val();
            var sex = $("#sex").val();
            var age = $("#age").val();
            var fromDate = $("#fromDate").val();
            var mode = $("#mode").val();
            var toDate = $("#toDate").val();
            var amount = $("#amount").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var photo = $("img").attr("src");

            var json = {
                memberName : memberName,
                sex : sex,
                age : age,
                fromDate : fromDate,
                mode : mode,
                toDate :toDate,
                amount : amount,
                email : email,
                phone : phone,
                photo : photo

            }

            alert(JSON.stringify(json));
        });


var data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14,
            50,
            41,
            2,
            63,
            10,
            41,
            22
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB",
            "#6AFB92",
            "#FFE87C",
            "#E77DFF",
            "#C2B280",
            "#BF55D7",
            "#6DD656",
            "#D66956"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
};

// Graph
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: data,
    options: {
            elements: {
                arc: {
                    borderColor: "#FFFFFF"
                }
            }
        }
});


// Web Cam
    ;(function(){
        function userMedia(){
            return navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia || null;

        }


        // Now we can use it
        if( userMedia() ){
            var videoPlaying = false;
            var constraints = {
                video: true,
                audio:false
            };
            var video = document.getElementById('v');

            var media = navigator.getUserMedia(constraints, function(stream){

                // URL Object is different in WebKit
                var url = window.URL || window.webkitURL;

                // create the url and set the source of the video element
                video.src = url ? url.createObjectURL(stream) : stream;

                // Start the video
                video.play();
                videoPlaying  = true;
            }, function(error){
                console.log("ERROR");
                console.log(error);
            });


            // Listen for user click on the "take a photo" button
            document.getElementById('take').addEventListener('click', function(){
                if (videoPlaying){
                    var canvas = document.getElementById('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0);
                    var data = canvas.toDataURL('image/webp');
                    document.getElementById('photo').setAttribute('src', data);
		    //console.log(data);
                }
            }, false);



        } else {
            console.log("KO");
        }
    })();


});