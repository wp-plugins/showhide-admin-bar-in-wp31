<?php
/*
Plugin Name: Show/Hide WordPress Admin Bar
Plugin URI: http://www.sitepower.co.uk/
Description: Shows/Hides the WP Admin Bar
Author: James Mountford
Version: 1.1
Author URI: http://www.sitepower.co.uk/
*/
require(ABSPATH . WPINC . '/pluggable.php');
global $current_user;
get_currentuserinfo();
if($current_user->ID){
//if(is_user_logged_in()){
	add_action('wp_head', 'fix_admin_bar');
//}
}
function fix_admin_bar(){
	echo "<script type='text/javascript' src='", get_bloginfo('wpurl'), "/wp-content/plugins/showhide-admin-bar-in-wp31/js/show-hide-admin-bar.js'></script>";
}

?>