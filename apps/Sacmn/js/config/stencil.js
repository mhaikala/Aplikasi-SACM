/*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2017-09-21 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


var App = App || {};

App.config = App.config || {};

(function() {

    'use strict';

    App.config.stencil = {};

    App.config.stencil.groups = {
        basic: { index: 1, label: 'Notasi' },
        line: { index: 2, label: 'Line Description' },

    };

    App.config.stencil.shapes = {};

    App.config.stencil.shapes.basic = [{


            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Axiomatic Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/se.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity': '1',
                    refX: '0%',
                    refY: '-60%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity': '1',
                    refX: '-40%',
                    refY: '-95%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Defeated Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/df.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-30%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        },

        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/s1.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-30%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        },


        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'NeedsSupport Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/nsc.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-30%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Abstract Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/abstr.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-35%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        }, {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Ascited Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/ascited.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-37%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'

                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Assumed Claim',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/ass.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-35%',
                    refY: '-80%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Argument Reasoning',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec1.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '35%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '7%',
                    refY: '-85%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Artifact Reference',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec2.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-25%',
                    refY: '-90%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Abstract Artifact Reference',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec8.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-25%',
                    refY: '-90%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'ArgumentPackageInterface',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec3.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'description',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '-10%',
                    refY: '-45%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    
                    refX: '-35%',
                    refY: '-87%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'ArgumentPackageBinding',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec4.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'description',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '-10%',
                    refY: '-45%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-35%',
                    refY: '-87%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'ArgumentPackage',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    width: 70,
                    height: 72,
                    'xlink:href': 'assets/vec5.svg',
                    'opacity': '1'
                },
                text: {
                    text: 'description',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    'opacity':'1',
                    refX: '-10%',
                    refY: '-45%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    'font-size': 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    'opacity':'1',
                    refX: '-35%',
                    refY: '-87%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'


                }
            }
        },


    ];


    App.config.stencil.shapes.line = [{
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line1.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-60%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line2.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line3.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line4.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line5.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '-5%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line6.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 45, height: 35 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/line7.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
    ];




})();