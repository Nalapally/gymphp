$(document).ready(function(e){
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


});