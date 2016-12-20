=== Plugin Name ===
Plugin Name: FusionCharts for Wordpress
Plugin URI: http://wordpress.org/plugins/fc-wp/
Tags: interactive charts, javascript chart, data visualization, fusioncharts wordpress plugin, fusioncharts
Author: Sahasrangshu Guha
Author URI: https://github.com/sguha-work/
Contributors: Sahasrangshu Guha, Uttam Thapa
Contributor URI: https://github.com/ukthapa/
Requires at least: 2.3
Tested up to: 4.6.1
Stable tag: 1.0
Version: 1.0
License: GPLv3


== Description ==
	**FusionCharts** is a software service provider creating data visualization products. Its flagship product, **FusionCharts Suite XT**, is a comprehensive JavaScript-based charting solution that focuses on easing the process of data visualization through charts. With over 90 charts and 1000 maps, FusionCharts Suite XT covers a wide range of data visualization requirements. The product includes standard charts, like the column chart, bar chart, line chart, as well as advanced charts like the treemap, heatmap, waterfall chart, radar chart, and so on. (To know more, take a look at the complete list of [charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html) and [maps](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html) in FusionCharts Suite XT.)
	The **FusionCharts for WordPress** plugin lets you embed awesome-looking JavaScript charts in your WordPress page or post.

== Installation ==
1. Upload the **fc-wp** folder to the **/wp-content/plugins** directory.
2. Activate the **FusionCharts for WordPress** plugin through the **Plugins** menu in Wordpress.
    * Open the **Plugins** page.
	* Click the **Activate** button to activate the **FusionCharts for WordPress** plugin.
3. Once the plugin is installed and activated, the **Add Chart** button can be seen in the post and page editor (as shown in Image 1 in the Screenshots section).

== Usage guide ==

1. In the editor, click the **Add Chart** button (as shown in Image 1 in the Screenshots section).

 You will be given a form to fill up the basic chart settings for FusionCharts (as shown in Image 2 in the Screenshots section).

 **Note:** Default values are already populated in the form fields, including sample JSON data to create a basic column 2D chart. For more chart samples, click [here](http://www.fusioncharts.com/charts/).

1. Click the **PREVIEW THE CHART** button (in the bottom-left corner of Image 2 in the Screenshots section) to preview the chart before embedding it in your post/page (preview for the sample chart is in Image 3 in the Screenshots section).

 **Note:** If there is error in chart data, the preview is not shown.

1. If you need to change the chart settings, click **BACK TO SETTINGS** (refer Image 3 in the Screenshots section) to go back to the form with the settings.

1. Make the required changes to the chart settings and preview the chart again.

1. If everything looks good, click **EMBED THIS CHART** (refer Image 3 in the Screenshots section).

1. Click **Publish** (for a new post)/**Update** (for a modified post) to view the page/post (the final output for the sample chart is shown in Image 5 in the Screenshots section).

== Upgrade Notice ==
	= 0.2 =
		This version is based on FusionCharts v3.8.0, we will update the plugin as New version of FusionChart released and/or
		bug fix and improvement of the plugin itself

== Screenshots ==
1. **Image 1**: The **Add Chart** besides the Add Media Button before the WYSIWYG editor, the first step in embedding a FusionCharts Suite XT chart in your page
2. **Image 2**: The chart settings form
3. **Image 3**: The preview of the chart, as specified in the chart settings form
4. **Image 4**: The published post

== Changelog ==

= v1.0 =

1. Changed plugin UI
2. Added feature to direct embed the chart to Post/Page without copy-paste

= v0.25 =

1. Fusioncharts libraries updated to latest version 3.11.2

= v0.24 =

1. Fusioncharts libraries updated to latest version 3.11.0

= v0.23 =

1. Fusioncharts libraries updated to latest version 3.10
2. Two new chart types added Treemap chart and Zoom Scatter chart

= v0.22 =

1. Bug fix in parsing XML data
2. Bug fix in parsing JSON data
3. Chart type specific example data both XML and JSON

= v0.21 =

1. Bug fix in chart generation library
2. Changed sample data population
3. UI changes

= v0.2 =

1. Added the feature to have data from JSON/XML url.

== Frequently Asked Questions ==
	= What about FusionChart? =
	Well you may just put the query in Google. :) Please visit http://www.fusioncharts.com/ to know the awesome
	= How do I get a licensed version of FusionCharts to use with this plugin? =
	You can buy the licensed version of FusionCharts Suite XT from here : http://www.fusioncharts.com/buy/.
	Once done, all you need to do is unzip all the files received with the purchased product in the wp-content/plugins/fc-wp/assets/fc-assets folder (replacing the current files).
== Donations ==
	This plugin is and always will be free for use. Reach out to us at [https://github.com/sguha-work/fc-wp/issues](https://github.com/sguha-work/fc-wp/issues) for your suggestions to help us to improve or with regard to any issues that you are facing.
