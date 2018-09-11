const app_name = "Smart Amusement ";
var developer_url = "https://onlinemedia.com.ng";
var developer_email = "admin@onlinemedia.com.ng";
var supervisor = "OnlineMedia";


//var url = 'http://app.onlinemedia.com.ng/mobileChat/api.php';
var url;

var env,server_upload_url,app_path;
env = "locals";

var base_url;

if(env == "local"){
    url = "http://project.apps/SmartTour/api.php";
    base_url = "http://project.apps/SmartTour";
    server_upload_url = "http://project.apps/cdn/";

}else{
    base_url = "https://projects.onlinemedia.com.ng/SmartTour";
    url = 'https://projects.onlinemedia.com.ng/SmartTour/api.php';
    server_upload_url = "https://cdn.uwansell.com.ng/apps/";
}

app_path = "SmartTour/";
