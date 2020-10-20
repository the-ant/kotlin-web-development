(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'react-player', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('react-player'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-router-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['react-player'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'react-player' was not found. Please, check whether 'react-player' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'TodosWeb'.");
    }root.TodosWeb = factory(typeof TodosWeb === 'undefined' ? {} : TodosWeb, kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['react-player'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$react_player, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var margin = $module$kotlin_css.kotlinx.css.margin_9vmwvs$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var Unit = Kotlin.kotlin.Unit;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var Overflow = $module$kotlin_css.kotlinx.css.Overflow;
  var set_overflowY = $module$kotlin_css.kotlinx.css.set_overflowY_qhpm6s$;
  var ListStyleType = $module$kotlin_css.kotlinx.css.ListStyleType;
  var set_listStyleType = $module$kotlin_css.kotlinx.css.set_listStyleType_pit7rx$;
  var BorderStyle = $module$kotlin_css.kotlinx.css.BorderStyle;
  var border = $module$kotlin_css.kotlinx.css.properties.border_2hqznt$;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var set_marginLeft = $module$kotlin_css.kotlinx.css.set_marginLeft_n8chyh$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var FontWeight = $module$kotlin_css.kotlinx.css.FontWeight;
  var set_fontWeight = $module$kotlin_css.kotlinx.css.set_fontWeight_6wqc8f$;
  var set_marginRight = $module$kotlin_css.kotlinx.css.set_marginRight_n8chyh$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var ObjectFit = $module$kotlin_css.kotlinx.css.ObjectFit;
  var set_objectFit = $module$kotlin_css.kotlinx.css.set_objectFit_j2gnxk$;
  var set_borderWidth = $module$kotlin_css.kotlinx.css.set_borderWidth_n8chyh$;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var routeLink = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.routeLink_4zdlmx$;
  var route = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.route_9tkfd6$;
  var switch_0 = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.switch_jg12zk$;
  var hashRouter = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.hashRouter_tj5j28$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var LI_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var H4_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
  var SPAN_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var LI_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var A_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var UL_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var getKClass = Kotlin.getKClass;
  var set_marginTop = $module$kotlin_css.kotlinx.css.set_marginTop_n8chyh$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var LABEL_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var P_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var H3_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var Outline = $module$kotlin_css.kotlinx.css.Outline;
  var set_outline = $module$kotlin_css.kotlinx.css.set_outline_jfkew8$;
  var BoxSizing = $module$kotlin_css.kotlinx.css.BoxSizing;
  var set_boxSizing = $module$kotlin_css.kotlinx.css.set_boxSizing_f0dk3l$;
  var set_border = $module$kotlin_css.kotlinx.css.set_border_krvuuu$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RComponent_init_0 = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var getCallableRef = Kotlin.getCallableRef;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  TextField.prototype = Object.create(RComponent.prototype);
  TextField.prototype.constructor = TextField;
  VideoItem.prototype = Object.create(RComponent.prototype);
  VideoItem.prototype.constructor = VideoItem;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  VideoPlayer.prototype = Object.create(RComponent.prototype);
  VideoPlayer.prototype.constructor = VideoPlayer;
  Login.prototype = Object.create(RComponent.prototype);
  Login.prototype.constructor = Login;
  MainFrame.prototype = Object.create(RComponent.prototype);
  MainFrame.prototype.constructor = MainFrame;
  Register.prototype = Object.create(RComponent.prototype);
  Register.prototype.constructor = Register;
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledLi$lambda(it) {
    return new LI_init(html.emptyMap, it);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function styledH4$lambda(it) {
    return new H4_init(html.emptyMap, it);
  }
  function styledSpan$lambda(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init_0(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function a$lambda(closure$href, closure$target, closure$classes) {
    return function (it) {
      return new A_init(attributesMapOf_1(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  var videoList;
  function App() {
    RComponent_init(this);
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.videos = videoList;
    var tmp$ = $receiver.currentVideo == null;
    if (tmp$) {
      tmp$ = !$receiver.videos.isEmpty();
    }if (tmp$) {
      $receiver.currentVideo = videoList.get_za3lpa$(0);
    }};
  App.prototype.randomVideo_0 = function ($receiver) {
    if ($receiver.isEmpty())
      return null;
    var nextIndex = random(until(0, $receiver.size), Random.Default);
    console.log('next index: ' + nextIndex);
    return $receiver.get_za3lpa$(nextIndex);
  };
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    columnItemsStyle($receiver_0);
    set_width($receiver_1, get_pct(100));
    set_height($receiver_1, get_pct(100));
    margin($receiver_1, get_px(0));
    padding($receiver_1, get_px(0));
    set_backgroundColor($receiver_1, new Color('#181818'));
    this.renderAppBar_0($receiver_0);
    this.renderContents_0($receiver_0);
    $receiver.child_52psg1$($receiver_0.create());
  };
  App.prototype.renderContents_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    rowItemsStyle($receiver_0);
    set_width($receiver_1, get_pct(100));
    set_height($receiver_1, get_pct(100));
    this.renderVideoPlayer_0($receiver_0);
    this.renderListVideo_0($receiver_0);
    $receiver.child_52psg1$($receiver_0.create());
  };
  function App$renderVideoPlayer$lambda$lambda$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      var currentIndex = $receiver.videos.indexOf_11rb$(closure$video);
      console.log('reactPlayer - onEnded: ' + currentIndex);
      if (currentIndex !== -1 && (currentIndex + 1 | 0) < $receiver.videos.size) {
        $receiver.currentVideo = $receiver.videos.get_za3lpa$(currentIndex + 1 | 0);
      } else {
        if (!$receiver.videos.isEmpty()) {
          $receiver.currentVideo = $receiver.videos.get_za3lpa$(0);
        }}
      return Unit;
    };
  }
  function App$renderVideoPlayer$lambda$lambda$lambda$lambda$lambda(closure$video, this$App) {
    return function () {
      setState(this$App, App$renderVideoPlayer$lambda$lambda$lambda$lambda$lambda$lambda(closure$video));
      return Unit;
    };
  }
  function App$renderVideoPlayer$lambda$lambda$lambda$lambda(closure$video, this$App) {
    return function ($receiver) {
      $receiver.url = closure$video.url;
      $receiver.width = get_pct(100);
      $receiver.height = get_pct(100);
      $receiver.controls = true;
      $receiver.playing = true;
      $receiver.stopOnUnmount = false;
      $receiver.onEnded = App$renderVideoPlayer$lambda$lambda$lambda$lambda$lambda(closure$video, this$App);
      return Unit;
    };
  }
  function App$renderVideoPlayer$lambda$lambda$lambda(closure$video, this$App) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(App$renderVideoPlayer$lambda$lambda$lambda$lambda(closure$video, this$App));
      return Unit;
    };
  }
  App.prototype.renderVideoPlayer_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var tmp$;
    var $receiver_1 = $receiver_0.css;
    set_width($receiver_1, get_pct(75));
    set_height($receiver_1, get_pct(100));
    set_backgroundColor($receiver_1, Color.Companion.black);
    if ((tmp$ = this.state.currentVideo) != null) {
      console.log('currentVideo: ' + tmp$);
      $receiver_0.invoke_eb8iu4$($module$react_player.default, App$renderVideoPlayer$lambda$lambda$lambda(tmp$, this));
    }$receiver.child_52psg1$($receiver_0.create());
  };
  function App$renderListVideo$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      var tmp$;
      if (((tmp$ = $receiver.currentVideo) != null ? tmp$.id : null) !== this$.video.id) {
        $receiver.currentVideo = this$.video;
      }return Unit;
    };
  }
  function App$renderListVideo$lambda$lambda$lambda$lambda(this$, this$App) {
    return function (it) {
      setState(this$App, App$renderListVideo$lambda$lambda$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function App$renderListVideo$lambda$lambda$lambda(closure$item, this$App) {
    return function ($receiver) {
      var tmp$;
      $receiver.video = closure$item;
      $receiver.isSelected = closure$item.id === ((tmp$ = this$App.state.currentVideo) != null ? tmp$.id : null);
      $receiver.onSelected = App$renderListVideo$lambda$lambda$lambda$lambda($receiver, this$App);
      return Unit;
    };
  }
  App.prototype.renderListVideo_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var tmp$;
    var $receiver_1 = $receiver_0.css;
    set_width($receiver_1, get_pct(25));
    set_height($receiver_1, get_pct(100));
    set_overflowY($receiver_1, Overflow.auto);
    set_listStyleType($receiver_1, ListStyleType.none);
    set_backgroundColor($receiver_1, new Color('#181818'));
    border($receiver_1, get_px(1), BorderStyle.solid, new Color('#313131'));
    tmp$ = this.state.videos.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var $receiver_0_0 = new StyledDOMBuilder_init(styledLi$lambda);
      $receiver_0_0.key = item.id.toString();
      videoItem($receiver_0_0, App$renderListVideo$lambda$lambda$lambda(item, this));
      var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda);
      var $receiver_2 = $receiver_0_1.css;
      set_width($receiver_2, get_pct(100));
      set_height($receiver_2, get_px(1));
      set_backgroundColor($receiver_2, new Color('#313131'));
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      $receiver_0.child_52psg1$($receiver_0_0.create());
    }
    $receiver.child_52psg1$($receiver_0.create());
  };
  App.prototype.renderAppBar_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    rowSpaceBetweenItemsStyle($receiver_0);
    set_width($receiver_1, get_pct(100));
    set_height($receiver_1, get_px(54));
    set_zIndex($receiver_1, 4);
    set_backgroundColor($receiver_1, new Color('#202020'));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    rowItemsWithCenterVerticalStyle($receiver_0_0);
    var $receiver_0_1 = new StyledDOMBuilder_init(styledImg$lambda('Menu', '/images/ic_menu.svg'));
    var $receiver_2 = $receiver_0_1.css;
    set_width($receiver_2, get_px(24));
    set_height($receiver_2, get_px(24));
    set_marginLeft($receiver_2, get_px(25));
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new StyledDOMBuilder_init(styledImg$lambda('Youtube', '/images/ic_youtube.svg'));
    var $receiver_3 = $receiver_0_2.css;
    set_width($receiver_3, get_px(25));
    set_height($receiver_3, get_px(25));
    set_marginLeft($receiver_3, get_px(25));
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledH4$lambda);
    var $receiver_4 = $receiver_0_3.css;
    set_marginLeft($receiver_4, get_px(4));
    set_color($receiver_4, Color.Companion.white);
    set_fontSize($receiver_4, get_px(20));
    set_fontWeight($receiver_4, FontWeight.Companion.w500);
    $receiver_0_3.unaryPlus_pdl1vz$('YOUTUBE');
    $receiver_0_0.child_52psg1$($receiver_0_3.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_5 = $receiver_0_4.css;
    rowSpaceBetweenItemsStyle($receiver_0_4);
    set_width($receiver_5, get_px(640));
    set_height($receiver_5, get_px(30));
    border($receiver_5, get_px(1), BorderStyle.solid, new Color('#313131'), get_px(4));
    set_backgroundColor($receiver_5, new Color('#181818'));
    var $receiver_0_5 = new StyledDOMBuilder_init(styledSpan$lambda);
    var $receiver_6 = $receiver_0_5.css;
    set_fontSize($receiver_6, get_px(16));
    set_color($receiver_6, new Color('#747474'));
    set_marginLeft($receiver_6, get_px(15));
    $receiver_0_5.unaryPlus_pdl1vz$('Search');
    $receiver_0_4.child_52psg1$($receiver_0_5.create());
    var $receiver_0_6 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_7 = $receiver_0_6.css;
    centerItemsStyle($receiver_0_6);
    set_width($receiver_7, get_px(65));
    set_height($receiver_7, get_px(30));
    set_backgroundColor($receiver_7, new Color('#313131'));
    var $receiver_0_7 = new StyledDOMBuilder_init(styledImg$lambda('Youtube', '/images/ic_search.svg'));
    smallIconStyle($receiver_0_7);
    $receiver_0_6.child_52psg1$($receiver_0_7.create());
    $receiver_0_4.child_52psg1$($receiver_0_6.create());
    $receiver_0.child_52psg1$($receiver_0_4.create());
    var $receiver_0_8 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_8 = $receiver_0_8.css;
    rowSpaceBetweenItemsStyle($receiver_0_8);
    set_height($receiver_8, get_pct(100));
    var $receiver_0_9 = new StyledDOMBuilder_init(styledImg$lambda('Video call', '/images/ic_video_call.svg'));
    var $receiver_9 = $receiver_0_9.css;
    smallIconStyle($receiver_0_9);
    set_marginRight($receiver_9, get_px(24));
    $receiver_0_8.child_52psg1$($receiver_0_9.create());
    var $receiver_0_10 = new StyledDOMBuilder_init(styledImg$lambda('Applications', '/images/ic_applications.svg'));
    var $receiver_10 = $receiver_0_10.css;
    smallIconStyle($receiver_0_10);
    set_marginRight($receiver_10, get_px(24));
    $receiver_0_8.child_52psg1$($receiver_0_10.create());
    var $receiver_0_11 = new StyledDOMBuilder_init(styledImg$lambda('Notification', '/images/ic_notification.svg'));
    var $receiver_11 = $receiver_0_11.css;
    smallIconStyle($receiver_0_11);
    set_marginRight($receiver_11, get_px(24));
    $receiver_0_8.child_52psg1$($receiver_0_11.create());
    var $receiver_0_12 = new StyledDOMBuilder_init(styledImg$lambda('Avatar', 'https://i.pinimg.com/originals/e2/da/00/e2da0012592223fc0de543ef8e94842c.jpg'));
    var $receiver_12 = $receiver_0_12.css;
    set_width($receiver_12, get_px(35));
    set_height($receiver_12, get_px(35));
    set_borderRadius($receiver_12, get_px(18));
    set_marginRight($receiver_12, get_px(25));
    set_objectFit($receiver_12, ObjectFit.cover);
    set_borderWidth($receiver_12, get_px(1));
    set_borderColor($receiver_12, new Color('#313131'));
    $receiver_0_8.child_52psg1$($receiver_0_12.create());
    $receiver_0.child_52psg1$($receiver_0_8.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  function App$routing$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Home');
    return Unit;
  }
  function App$routing$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('login');
    return Unit;
  }
  function App$routing$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('register');
    return Unit;
  }
  function App$routing$lambda$lambda$lambda$lambda(this$) {
    return function () {
      var $receiver = this$;
      var $receiver_0 = new RDOMBuilder_init(a$lambda('#/', null, null));
      $receiver_0.unaryPlus_pdl1vz$('Back');
      $receiver.child_52psg1$($receiver_0.create());
      var $receiver_1 = this$;
      var $receiver_0_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Home Page');
      return $receiver_1.child_52psg1$($receiver_0_0.create());
    };
  }
  function App$routing$lambda$lambda$lambda$lambda_0(this$) {
    return function () {
      var $receiver = this$;
      var $receiver_0 = new RDOMBuilder_init(a$lambda('#/', null, null));
      $receiver_0.unaryPlus_pdl1vz$('Back');
      $receiver.child_52psg1$($receiver_0.create());
      var $receiver_1 = this$;
      var $receiver_0_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$('login');
      return $receiver_1.child_52psg1$($receiver_0_0.create());
    };
  }
  function App$routing$lambda$lambda$lambda$lambda_1(this$) {
    return function () {
      var $receiver = this$;
      var $receiver_0 = new RDOMBuilder_init(a$lambda('#/', null, null));
      $receiver_0.unaryPlus_pdl1vz$('Back');
      $receiver.child_52psg1$($receiver_0.create());
      var $receiver_1 = this$;
      var $receiver_0_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$('register');
      return $receiver_1.child_52psg1$($receiver_0_0.create());
    };
  }
  function App$routing$lambda$lambda$lambda($receiver) {
    route($receiver, '/', void 0, true, App$routing$lambda$lambda$lambda$lambda($receiver));
    route($receiver, '/login', void 0, true, App$routing$lambda$lambda$lambda$lambda_0($receiver));
    route($receiver, '/register', void 0, true, App$routing$lambda$lambda$lambda$lambda_1($receiver));
    return Unit;
  }
  function App$routing$lambda($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_alignItems($receiver_1, Align.center);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_backgroundColor($receiver_1, Color.Companion.white);
    set_height($receiver_1, get_pct(100));
    set_width($receiver_1, get_pct(100));
    var $receiver_0_0 = new RDOMBuilder_init(ul$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(li$lambda(null));
    routeLink($receiver_0_1, '/', void 0, void 0, App$routing$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(li$lambda(null));
    routeLink($receiver_0_2, '/login', void 0, void 0, App$routing$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(li$lambda(null));
    routeLink($receiver_0_3, '/register', void 0, void 0, App$routing$lambda$lambda$lambda$lambda$lambda_1);
    $receiver_0_0.child_52psg1$($receiver_0_3.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    switch_0($receiver_0, App$routing$lambda$lambda$lambda);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  App.prototype.routing_0 = function ($receiver) {
    hashRouter($receiver, void 0, void 0, void 0, App$routing$lambda);
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function styledLabel$lambda(it) {
    return new LABEL_init(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function textField$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function textField($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(TextField), textField$lambda(handler));
  }
  function TextField() {
    RComponent_init(this);
  }
  TextField.prototype.init_bc6fkx$ = function ($receiver) {
  };
  TextField.prototype.init_65a95q$ = function ($receiver, props) {
    $receiver.text = props.text;
  };
  function TextField$render$lambda$lambda$lambda(this$TextField) {
    return function (it) {
      this$TextField.handleChange_0(it);
      return Unit;
    };
  }
  TextField.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledLabel$lambda);
    set_marginTop($receiver_0.css, get_px(11));
    labelInputStyle($receiver_0);
    $receiver_0.unaryPlus_pdl1vz$(this.props.label);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    set_marginTop($receiver_0_0.css, get_px(11));
    inputStyle($receiver_0_0);
    var $receiver_1 = $receiver_0_0.attrs;
    $receiver_1.type = this.props.type;
    $receiver_1.value = this.state.text;
    set_onChangeFunction($receiver_1, TextField$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  function TextField$handleChange$lambda(closure$event) {
    return function ($receiver) {
      $receiver.text = closure$event.target;
      return Unit;
    };
  }
  TextField.prototype.handleChange_0 = function (event) {
    setState(this, TextField$handleChange$lambda(event));
  };
  TextField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextField',
    interfaces: [RComponent]
  };
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledP$lambda(it) {
    return new P_init(html.emptyMap, it);
  }
  function VideoItem() {
    RComponent_init(this);
  }
  function VideoItem$render$lambda$lambda(this$VideoItem, closure$video) {
    return function (it) {
      this$VideoItem.props.onSelected(closure$video);
      return Unit;
    };
  }
  function VideoItem$render$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.url = closure$video.url;
      $receiver.light = true;
      $receiver.playing = false;
      $receiver.controls = false;
      $receiver.width = get_pct(100);
      $receiver.height = get_pct(100);
      return Unit;
    };
  }
  function VideoItem$render$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(VideoItem$render$lambda$lambda$lambda$lambda(closure$video));
      return Unit;
    };
  }
  VideoItem.prototype.render_ss14n$ = function ($receiver) {
    var isSelected = this.props.isSelected;
    var video = this.props.video;
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    set_onClickFunction($receiver_0.attrs, VideoItem$render$lambda$lambda(this, video));
    var $receiver_1 = $receiver_0.css;
    rowItemsWithCenterVerticalStyle($receiver_0);
    set_width($receiver_1, get_pct(100));
    set_height($receiver_1, get_px(100));
    padding_0($receiver_1, get_px(5), get_px(10));
    set_backgroundColor($receiver_1, new Color(isSelected ? '#303030' : '#181818'));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledP$lambda);
    set_color($receiver_0_0.css, new Color(isSelected ? '#AAAAAA' : '#181818'));
    $receiver_0_0.unaryPlus_pdl1vz$('\u25B6');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_2 = $receiver_0_1.css;
    set_width($receiver_2, get_px(175));
    set_height($receiver_2, get_pct(100));
    set_marginLeft($receiver_2, get_px(5));
    $receiver_0_1.invoke_eb8iu4$($module$react_player.default, VideoItem$render$lambda$lambda$lambda(video));
    $receiver_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_3 = $receiver_0_2.css;
    columnItemsStyle($receiver_0_2);
    set_height($receiver_3, get_pct(100));
    padding($receiver_3, get_px(5));
    set_marginLeft($receiver_3, get_px(5));
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_4 = $receiver_0_3.css;
    set_color($receiver_4, Color.Companion.white);
    set_fontSize($receiver_4, get_px(16));
    set_fontWeight($receiver_4, FontWeight.Companion.w500);
    set_width($receiver_4, get_px(175));
    $receiver_0_3.unaryPlus_pdl1vz$(video.title);
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_5 = $receiver_0_4.css;
    set_color($receiver_5, new Color('#A8A8A8'));
    set_fontSize($receiver_5, get_px(13));
    set_fontWeight($receiver_5, FontWeight.Companion.w500);
    set_width($receiver_5, get_px(175));
    $receiver_0_4.unaryPlus_pdl1vz$(video.speaker);
    $receiver_0_2.child_52psg1$($receiver_0_4.create());
    $receiver_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  VideoItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoItem',
    interfaces: [RComponent]
  };
  function videoItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoItem($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoItem), videoItem$lambda(handler));
  }
  function styledP$lambda_0(it) {
    return new P_init(html.emptyMap, it);
  }
  function videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoList_0($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), videoList$lambda(handler));
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      this$VideoList.props.onSelectedVideo(closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new StyledDOMBuilder_init(styledP$lambda_0);
      var tmp$_0;
      set_marginLeft($receiver_0.css, get_px(16));
      $receiver_0.key = video.id.toString();
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda(this, video));
      if (((tmp$_0 = this.props.selectedVideo) != null ? tmp$_0.id : null) === video.id) {
        $receiver_0.unaryPlus_pdl1vz$('\u261E ');
      }$receiver_0.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function styledH3$lambda(it) {
    return new H3_init_0(html.emptyMap, it);
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function videoPlayer$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoPlayer($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoPlayer), videoPlayer$lambda(handler));
  }
  function VideoPlayer() {
    RComponent_init(this);
  }
  function VideoPlayer$render$lambda$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.url = this$VideoPlayer.props.video.url;
      $receiver.playing = true;
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(VideoPlayer$render$lambda$lambda$lambda(this$VideoPlayer));
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda(this$VideoPlayer) {
    return function (it) {
      this$VideoPlayer.props.onWatchedButtonPressed(this$VideoPlayer.props.video);
      return Unit;
    };
  }
  VideoPlayer.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_alignItems($receiver_1, Align.center);
    set_justifyContent($receiver_1, JustifyContent.center);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledH3$lambda);
    var $receiver_2 = $receiver_0_0.css;
    set_color($receiver_2, Color.Companion.white);
    set_backgroundColor($receiver_2, Color.Companion.orange);
    set_paddingTop($receiver_2, get_px(10));
    set_paddingBottom($receiver_2, get_px(10));
    set_paddingLeft($receiver_2, get_px(16));
    set_paddingRight($receiver_2, get_px(16));
    set_textAlign($receiver_2, TextAlign.center);
    set_borderRadius($receiver_2, get_px(5));
    $receiver_0_0.unaryPlus_pdl1vz$(this.props.video.speaker + ': ' + this.props.video.title);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver_0.invoke_eb8iu4$($module$react_player.default, VideoPlayer$render$lambda$lambda(this));
    var $receiver_0_1 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_3 = $receiver_0_1.css;
    buttonStyle($receiver_0_1);
    set_fontSize($receiver_3, get_px(20));
    set_marginTop($receiver_3, get_px(24));
    set_backgroundColor($receiver_3, this.props.unwatchedVideo ? new Color('#04C45C') : new Color('#2D3748'));
    set_onClickFunction($receiver_0_1.attrs, VideoPlayer$render$lambda$lambda$lambda$lambda(this));
    if (this.props.unwatchedVideo) {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as watched');
    } else {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as unwatched');
    }
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  VideoPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoPlayer',
    interfaces: [RComponent]
  };
  function labelInputStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_fontSize($receiver_0, get_px(16));
    set_color($receiver_0, new Color('#4A5568'));
  }
  function inputStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_height($receiver_0, get_px(50));
    set_fontSize($receiver_0, get_px(14));
    padding_0($receiver_0, get_px(17), get_px(20));
    set_outline($receiver_0, Outline.none);
    set_color($receiver_0, new Color('#2D3748'));
    set_boxSizing($receiver_0, BoxSizing.borderBox);
    border($receiver_0, get_px(1), BorderStyle.solid, new Color('#E8E8E8'), get_px(5));
  }
  function buttonStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_width($receiver_0, get_px(347));
    set_height($receiver_0, get_px(50));
    set_border($receiver_0, 'none');
    set_color($receiver_0, Color.Companion.white);
    set_borderRadius($receiver_0, get_px(5));
    set_outline($receiver_0, Outline.none);
    set_backgroundColor($receiver_0, new Color('#04C45C'));
  }
  function smallIconStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_width($receiver_0, get_px(24));
    set_height($receiver_0, get_px(24));
  }
  function rowSpaceBetweenItemsStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_display($receiver_0, Display.flex);
    set_flexDirection($receiver_0, FlexDirection.row);
    set_alignItems($receiver_0, Align.center);
    set_justifyContent($receiver_0, JustifyContent.spaceBetween);
  }
  function centerItemsStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_display($receiver_0, Display.flex);
    set_alignItems($receiver_0, Align.center);
    set_justifyContent($receiver_0, JustifyContent.center);
  }
  function rowItemsStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_display($receiver_0, Display.flex);
    set_flexDirection($receiver_0, FlexDirection.row);
  }
  function rowItemsWithCenterVerticalStyle($receiver) {
    var $receiver_0 = $receiver.css;
    rowItemsStyle($receiver);
    set_alignItems($receiver_0, Align.center);
  }
  function columnItemsStyle($receiver) {
    var $receiver_0 = $receiver.css;
    set_display($receiver_0, Display.flex);
    set_flexDirection($receiver_0, FlexDirection.column);
  }
  function styledSpan$lambda_0(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledButton$lambda_0(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function loginScreen$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function loginScreen($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Login), loginScreen$lambda(handler));
  }
  function login$lambda($receiver) {
    return Unit;
  }
  function login($receiver) {
    return $receiver.child_ssazr1$(getKClass(Login), login$lambda);
  }
  function Login() {
    RComponent_init(this);
  }
  function Login$render$lambda$lambda$lambda$lambda(this$Login) {
    return function (it) {
      this$Login.props.onFrameChange('Register');
      return Unit;
    };
  }
  Login.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_backgroundColor($receiver_1, Color.Companion.white);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledSpan$lambda_0);
    var $receiver_2 = $receiver_0_0.css;
    set_fontSize($receiver_2, get_px(16));
    set_color($receiver_2, new Color('#2D3748'));
    $receiver_0_0.unaryPlus_pdl1vz$('Welcome back');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledSpan$lambda_0);
    var $receiver_3 = $receiver_0_1.css;
    set_fontSize($receiver_3, get_px(25));
    set_fontWeight($receiver_3, FontWeight.Companion.bold);
    set_color($receiver_3, new Color('#1A202C'));
    $receiver_0_1.unaryPlus_pdl1vz$('Login to your account');
    $receiver_0.child_52psg1$($receiver_0_1.create());
    this.renderForms_0($receiver_0);
    var $receiver_0_2 = new StyledDOMBuilder_init(styledButton$lambda_0(null, null, null));
    var $receiver_4 = $receiver_0_2.css;
    buttonStyle($receiver_0_2);
    set_marginTop($receiver_4, get_px(27));
    $receiver_0_2.attrs.text_61zpoe$('Login now');
    $receiver_0.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledButton$lambda_0(null, null, null));
    var $receiver_5 = $receiver_0_3.css;
    buttonStyle($receiver_0_3);
    set_marginTop($receiver_5, get_px(15));
    set_backgroundColor($receiver_5, new Color('#2D3748'));
    var $receiver_6 = $receiver_0_3.attrs;
    $receiver_6.text_61zpoe$("Don't have an account? Join free today");
    set_onClickFunction($receiver_6, Login$render$lambda$lambda$lambda$lambda(this));
    $receiver_0.child_52psg1$($receiver_0_3.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  function Login$renderForms$lambda($receiver) {
    $receiver.type = InputType.text;
    $receiver.label = 'Username';
    return Unit;
  }
  function Login$renderForms$lambda_0($receiver) {
    $receiver.type = InputType.password;
    $receiver.label = 'Password';
    return Unit;
  }
  Login.prototype.renderForms_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
    set_marginTop($receiver_0.css, get_px(13));
    $receiver.child_52psg1$($receiver_0.create());
    textField($receiver, Login$renderForms$lambda);
    textField($receiver, Login$renderForms$lambda_0);
  };
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: [RComponent]
  };
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function MainFrameProps() {
  }
  MainFrameProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MainFrameProps',
    interfaces: []
  };
  function MainFrameState() {
  }
  MainFrameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MainFrameState',
    interfaces: []
  };
  function MainFrame(props) {
    RComponent_init_0(props, this);
    this.nameToTestMap_0 = hashMapOf([to('Login', getCallableRef('login', function ($receiver) {
      return login($receiver);
    })), to('Register', getCallableRef('register', function ($receiver) {
      return register($receiver);
    }))]);
  }
  MainFrame.prototype.init_65a95q$ = function ($receiver, props) {
    $receiver.view = props.initialView;
  };
  MainFrame.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    var tmp$, tmp$_0;
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_alignItems($receiver_1, Align.center);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_backgroundColor($receiver_1, Color.Companion.white);
    set_height($receiver_1, get_pct(100));
    set_width($receiver_1, get_pct(100));
    var view = (tmp$_0 = (tmp$ = this.nameToTestMap_0.get_11rb$(this.state.view)) != null ? tmp$($receiver_0) : null) != null ? tmp$_0 : null;
    $receiver.child_52psg1$($receiver_0.create());
  };
  MainFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainFrame',
    interfaces: [RComponent]
  };
  function mainFrame$lambda(closure$initialView) {
    return function ($receiver) {
      $receiver.attrs.initialView = closure$initialView;
      return Unit;
    };
  }
  function mainFrame($receiver, initialView) {
    return $receiver.child_ssazr1$(getKClass(MainFrame), mainFrame$lambda(initialView));
  }
  function styledSpan$lambda_1(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledButton$lambda_1(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda_4(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function registerScreen$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function registerScreen($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Register), registerScreen$lambda(handler));
  }
  function register$lambda($receiver) {
    return Unit;
  }
  function register($receiver) {
    return $receiver.child_ssazr1$(getKClass(Register), register$lambda);
  }
  function Register() {
    RComponent_init(this);
  }
  Register.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_4);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_backgroundColor($receiver_1, Color.Companion.white);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledSpan$lambda_1);
    var $receiver_2 = $receiver_0_0.css;
    set_fontSize($receiver_2, get_px(25));
    set_fontWeight($receiver_2, FontWeight.Companion.bold);
    set_color($receiver_2, new Color('#1A202C'));
    $receiver_0_0.unaryPlus_pdl1vz$('Welcome to join with us');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    this.renderForms_0($receiver_0);
    var $receiver_0_1 = new StyledDOMBuilder_init(styledButton$lambda_1(null, null, null));
    var $receiver_3 = $receiver_0_1.css;
    buttonStyle($receiver_0_1);
    set_marginTop($receiver_3, get_px(27));
    set_backgroundColor($receiver_3, new Color('#2D3748'));
    $receiver_0_1.attrs.text_61zpoe$('Register now');
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  function Register$renderForms$lambda($receiver) {
    $receiver.type = InputType.text;
    $receiver.label = 'Username';
    return Unit;
  }
  function Register$renderForms$lambda_0($receiver) {
    $receiver.type = InputType.password;
    $receiver.label = 'Password';
    return Unit;
  }
  function Register$renderForms$lambda_1($receiver) {
    $receiver.type = InputType.text;
    $receiver.label = 'Display Name';
    return Unit;
  }
  Register.prototype.renderForms_0 = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_4);
    set_marginTop($receiver_0.css, get_px(13));
    $receiver.child_52psg1$($receiver_0.create());
    textField($receiver, Register$renderForms$lambda);
    textField($receiver, Register$renderForms$lambda_0);
    textField($receiver, Register$renderForms$lambda_1);
  };
  Register.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Register',
    interfaces: [RComponent]
  };
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function Video(id, title, speaker, url) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.url = url;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.url;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, url) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, url === void 0 ? this.url : url);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.url, other.url)))));
  };
  Object.defineProperty(_, 'videoList', {
    get: function () {
      return videoList;
    }
  });
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.App = App;
  var package$component = _.component || (_.component = {});
  package$component.textField_uwlop8$ = textField;
  package$component.TextField = TextField;
  package$component.VideoItem = VideoItem;
  package$component.videoItem_fkcecz$ = videoItem;
  package$component.videoList_ni9v7s$ = videoList_0;
  package$component.VideoList = VideoList;
  package$component.videoPlayer_rec1nf$ = videoPlayer;
  package$component.VideoPlayer = VideoPlayer;
  var package$style = package$component.style || (package$component.style = {});
  package$style.labelInputStyle_214bxo$ = labelInputStyle;
  package$style.inputStyle_214bxo$ = inputStyle;
  package$style.buttonStyle_214bxo$ = buttonStyle;
  package$style.smallIconStyle_214bxo$ = smallIconStyle;
  package$style.rowSpaceBetweenItemsStyle_214bxo$ = rowSpaceBetweenItemsStyle;
  package$style.centerItemsStyle_214bxo$ = centerItemsStyle;
  package$style.rowItemsStyle_214bxo$ = rowItemsStyle;
  package$style.rowItemsWithCenterVerticalStyle_214bxo$ = rowItemsWithCenterVerticalStyle;
  package$style.columnItemsStyle_214bxo$ = columnItemsStyle;
  var package$feature = _.feature || (_.feature = {});
  package$feature.loginScreen_cdt329$ = loginScreen;
  package$feature.login_ss14n$ = login;
  package$feature.Login = Login;
  package$feature.MainFrameProps = MainFrameProps;
  package$feature.MainFrameState = MainFrameState;
  package$feature.MainFrame = MainFrame;
  package$feature.mainFrame_hw0qe1$ = mainFrame;
  package$feature.registerScreen_9qd0pf$ = registerScreen;
  package$feature.register_ss14n$ = register;
  package$feature.Register = Register;
  _.main = main;
  var package$model = _.model || (_.model = {});
  package$model.Video = Video;
  videoList = listOf([new Video(1, 'BIGCITYBOI (Official Music Video)', 'BinZ', 'https://www.youtube.com/watch?v=jgZkrA8E5do'), new Video(2, 'Thunder', 'Imagine Dragons', 'https://www.youtube.com/watch?v=fKopy74weus'), new Video(3, 'Girls Like You ft. Cardi B (Official Music Video)', 'Maroon 5', 'https://www.youtube.com/watch?v=aJOTlE1K90k'), new Video(4, 'CRAZY MAN', 'JUSTATEE x PHUONG LY', 'https://www.youtube.com/watch?v=HXkh7EOqcQ4'), new Video(5, 'Hoa N\u1EDF Kh\xF4ng M\xE0u | Acoustic Version', 'Ho\xE0i L\xE2m', 'https://www.youtube.com/watch?v=y_6aSG2yfe8'), new Video(6, '\u0110en - L\u1ED1i Nh\u1ECF ft. Ph\u01B0\u01A1ng Anh \u0110\xE0o', '\u0110en', 'https://www.youtube.com/watch?v=KKc_RMln5UY'), new Video(7, '\u0110en ft. MIN - B\xE0i N\xE0y Chill Ph\u1EBFt', '\u0110en', 'https://www.youtube.com/watch?v=ddaEtFOsFeM'), new Video(8, '\u0110en - \u0110\u01B0a Nhau \u0110i Tr\u1ED1n ft. Linh C\xE1o', '\u0110en', 'https://www.youtube.com/watch?v=5e7e_KZINA4'), new Video(9, 'Ai Cho Ai', 'FloD', 'https://www.youtube.com/watch?v=afNQLlTRvfM'), new Video(10, 'Anh Th\u01B0\u01A1ng Em Nh\u1EA5t M\xE0?', 'L\xE3. x Log x TiB', 'https://www.youtube.com/watch?v=ZgRNBvSLsRc'), new Video(11, 'Th\xEC Th\xF4i', 'Reddy', 'https://www.youtube.com/watch?v=Eb8fj-jstNo'), new Video(12, '1 Ph\xFAt', 'Andiez', 'https://www.youtube.com/watch?v=dLQe4qEfVJw'), new Video(13, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(14, "Ex's Hate Me", 'B Ray x Masew (Ft AMEE)', 'https://www.youtube.com/watch?v=95ahbau-rJk&list=RD95ahbau-rJk&start_radio=1'), new Video(15, 'T\u1EADn C\xF9ng N\u1ED7i Nh\u1EDB', 'Will x Han Sara', 'https://www.youtube.com/watch?v=UOpE-hRFPCo&list=RD95ahbau-rJk&index=6'), new Video(16, 'CHI\u1EC0U H\xD4M \u1EA4Y', 'JayKii', 'https://www.youtube.com/watch?v=SA35ldy92s0&list=RD95ahbau-rJk&index=11'), new Video(17, '7 Years', 'Lukas Graham', 'https://www.youtube.com/watch?v=LHCob76kigA'), new Video(18, 'Shape of You', 'Ed Sheeran', 'https://www.youtube.com/watch?v=JGwWNGJdvx8'), new Video(19, 'Numb', 'Linkin Park', 'https://www.youtube.com/watch?v=kXYiU_JCYtU'), new Video(20, 'Counting Stars', 'OneRepublic', 'https://www.youtube.com/watch?v=hT_nvWreIhg'), new Video(21, 'Mirrors', 'Justin Timberlake', 'https://www.youtube.com/watch?v=uuZE_IRwLNI'), new Video(22, 'Just Give Me A Reason ft. Nate Ruess', 'P!nk', 'https://www.youtube.com/watch?v=OpQFFLBMEPI'), new Video(23, 'Despacito', 'Luis Fonsi', 'https://www.youtube.com/watch?v=kJQP7kiw5Fk')]);
  main();
  Kotlin.defineModule('TodosWeb', _);
  return _;
}));

//# sourceMappingURL=TodosWeb.js.map
