<?php
    class fcwp_FusionCharts {
        
        private $constructorTemplate = '
        <script type="text/javascript">
            FusionCharts.ready(function () {
                new FusionCharts(__constructorOptions__);
            });
        </script>
        ';

        private $renderTemplate = '
        <script type="text/javascript">
            FusionCharts.ready(function () {
                FusionCharts("__chartId__").render();
            });
        </script>
        ';

        private $chartOptions = array();
        
        private $chartDataSource = "";
        
        function __construct($chartType="", $chartId="", $chartWidth = "", $chartWidthUnit = "", $chartHeight = "", $chartHeightUnit = "", $chartRenderAt="", $chartDataFormat="", $chartDataSource="") {
            $this->chartOptions["id"] = $chartId;
            $this->chartOptions["width"] = $chartWidth . $chartWidthUnit;
            $this->chartOptions["height"] = $chartHeight . $chartHeightUnit;
            $this->chartOptions["renderAt"] = $chartRenderAt;
            $this->chartOptions["type"] = $chartType;
            $this->chartOptions["dataFormat"] = $chartDataFormat;
            if(strpos($this->chartOptions["dataFormat"], "url")) {
                $this->chartOptions["dataSource"] = $chartDataSource;
            } else {
                $this->chartOptions["dataSource"] = "__dataSource__";
                if($this->chartOptions["dataFormat"] == "json") {
                    $this->chartDataSource = str_replace("\n", "", stripslashes($chartDataSource));
                } else {
                    $this->chartDataSource = str_replace("\n", "", $chartDataSource);
                }
            }
        }
        
        function render() {
            if(strpos($this->chartOptions["dataFormat"], "url")) {
                $outputHTML = str_replace("__constructorOptions__", json_encode($this->chartOptions), $this->constructorTemplate).str_replace("__chartId__", $this->chartOptions["id"], $this->renderTemplate);    
            } else {
                if($this->chartOptions["dataFormat"] == "json") {
                    $outputHTML = str_replace("__constructorOptions__", str_replace("\"__dataSource__\"",$this->chartDataSource,json_encode($this->chartOptions)), $this->constructorTemplate).str_replace("__chartId__", $this->chartOptions["id"], $this->renderTemplate);                    
                } else {
                    $outputHTML = str_replace("__constructorOptions__", str_replace("__dataSource__",$this->chartDataSource,json_encode($this->chartOptions)), $this->constructorTemplate).str_replace("__chartId__", $this->chartOptions["id"], $this->renderTemplate);                    
                }
            }
            return $outputHTML;
        }
    }
?>