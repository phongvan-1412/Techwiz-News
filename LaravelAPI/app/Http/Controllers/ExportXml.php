<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExportXml extends Controller
{
    const START_NODE1 = "<";
    const START_NODE2 = "</";
    const END_NODE = ">";

    public $baseXml;
    public $xml;
    public $startNode;
    public $endNode;

    public function __construct($xml)
    {   
        $this->xml = $xml;
    }
    
    public function StartXml()
    {
        $this->baseXml = $this->xml;
    }
    

    public function StartChildNode($node)
    {
        $node_s = self::START_NODE1.$node.self::END_NODE;
        
        $this->xml .= $node_s;
    }

    public function EndChildNode($node)
    {
        $node_s = self::START_NODE2.$node.self::END_NODE;
        
        $this->xml .= $node_s;
    }

    public function AddNode($node,$value ='')
    {
        $node_s = self::START_NODE1.$node.self::END_NODE;
        $node_e = self::START_NODE2.$node.self::END_NODE;

        $this->xml .= $node_s.$value.$node_e;
    }

    public function ExportXml($fileName)
    {
        $this->endNode = self::EndNode($this->baseXml);
        $this->xml .= $this->endNode;
        try{
            file_put_contents($fileName,$this->xml);
        }
        catch(Throwable $e) {
            
            fclose($fileName);
          }
    }

    private function EndNode($newName)
    {
        $index_s = strpos($newName, self::START_NODE1,20);
        $index_e = strpos($newName, self::END_NODE,$index_s);
        $string = substr($newName,++$index_s,$index_e);
        $string_e = self::START_NODE2.$string;
        return $string_e;
    }
}