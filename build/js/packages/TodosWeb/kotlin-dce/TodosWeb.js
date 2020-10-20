(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'react-player', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-coroutines-core', 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('react-player'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-coroutines-core'), require('kotlin-wrappers-kotlin-react-router-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-html-js'));
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
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'TodosWeb'.");
    }root.TodosWeb = factory(typeof TodosWeb === 'undefined' ? {} : TodosWeb, kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['react-player'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-coroutines-core'], this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$react_player, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_coroutines_core, $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
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
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
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
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var P_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var H3_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var set_border = $module$kotlin_css.kotlinx.css.set_border_krvuuu$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoItem.prototype = Object.create(RComponent.prototype);
  VideoItem.prototype.constructor = VideoItem;
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
  function App() {
    RComponent_init(this);
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.videos = listOf([new Video(1, 'BIGCITYBOI (Official Music Video)', 'BinZ', 'https://www.youtube.com/watch?v=jgZkrA8E5do'), new Video(2, 'Thunder', 'Imagine Dragons', 'https://www.youtube.com/watch?v=fKopy74weus'), new Video(3, 'Girls Like You ft. Cardi B (Official Music Video)', 'Maroon 5', 'https://www.youtube.com/watch?v=aJOTlE1K90k'), new Video(4, 'CRAZY MAN', 'JUSTATEE x PHUONG LY', 'https://www.youtube.com/watch?v=HXkh7EOqcQ4'), new Video(5, 'Hoa N\u1EDF Kh\xF4ng M\xE0u | Acoustic Version', 'Ho\xE0i L\xE2m', 'https://www.youtube.com/watch?v=y_6aSG2yfe8'), new Video(6, '\u0110en - L\u1ED1i Nh\u1ECF ft. Ph\u01B0\u01A1ng Anh \u0110\xE0o', '\u0110en', 'https://www.youtube.com/watch?v=KKc_RMln5UY'), new Video(7, '\u0110en ft. MIN - B\xE0i N\xE0y Chill Ph\u1EBFt', '\u0110en', 'https://www.youtube.com/watch?v=ddaEtFOsFeM'), new Video(8, '\u0110en - \u0110\u01B0a Nhau \u0110i Tr\u1ED1n ft. Linh C\xE1o', '\u0110en', 'https://www.youtube.com/watch?v=5e7e_KZINA4'), new Video(9, 'Ai Cho Ai', 'FloD', 'https://www.youtube.com/watch?v=afNQLlTRvfM'), new Video(10, 'Anh Th\u01B0\u01A1ng Em Nh\u1EA5t M\xE0?', 'L\xE3. x Log x TiB', 'https://www.youtube.com/watch?v=ZgRNBvSLsRc'), new Video(11, 'Th\xEC Th\xF4i', 'Reddy', 'https://www.youtube.com/watch?v=Eb8fj-jstNo'), new Video(12, '1 Ph\xFAt', 'Andiez', 'https://www.youtube.com/watch?v=dLQe4qEfVJw'), new Video(13, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(14, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(15, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(16, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(17, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(18, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(19, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM'), new Video(20, 'OK', 'BINZ', 'https://www.youtube.com/watch?v=SNES5Y-tYxM')]);
    var tmp$ = $receiver.currentVideo == null;
    if (tmp$) {
      tmp$ = !$receiver.videos.isEmpty();
    }if (tmp$) {
      $receiver.currentVideo = $receiver.videos.get_za3lpa$(0);
    }};
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
      console.log('reactPlayer - onEnded:');
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
      $receiver.pip = true;
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
  function Coroutine$fetGreeting($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$fetGreeting.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$fetGreeting.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetGreeting.prototype.constructor = Coroutine$fetGreeting;
  Coroutine$fetGreeting.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch('http://192.168.16.44:8081/'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.result_0.json(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  App.prototype.fetGreeting = function (continuation_0, suspended) {
    var instance = new Coroutine$fetGreeting(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  App.$metadata$ = {kind: Kind_CLASS, simpleName: 'App', interfaces: [RComponent]};
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
  VideoItem.$metadata$ = {kind: Kind_CLASS, simpleName: 'VideoItem', interfaces: [RComponent]};
  function videoItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoItem($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoItem), videoItem$lambda(handler));
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
  Video.$metadata$ = {kind: Kind_CLASS, simpleName: 'Video', interfaces: []};
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
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.App = App;
  var package$component = _.component || (_.component = {});
  package$component.VideoItem = VideoItem;
  package$component.videoItem_fkcecz$ = videoItem;
  var package$style = package$component.style || (package$component.style = {});
  package$style.smallIconStyle_214bxo$ = smallIconStyle;
  package$style.rowSpaceBetweenItemsStyle_214bxo$ = rowSpaceBetweenItemsStyle;
  package$style.centerItemsStyle_214bxo$ = centerItemsStyle;
  package$style.rowItemsStyle_214bxo$ = rowItemsStyle;
  package$style.rowItemsWithCenterVerticalStyle_214bxo$ = rowItemsWithCenterVerticalStyle;
  package$style.columnItemsStyle_214bxo$ = columnItemsStyle;
  _.main = main;
  var package$model = _.model || (_.model = {});
  package$model.Video = Video;
  main();
  return _;
}));

//# sourceMappingURL=TodosWeb.js.map
