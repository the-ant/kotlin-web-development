(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'TodosWeb'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'TodosWeb'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'TodosWeb'.");
    }root.TodosWeb = factory(typeof TodosWeb === 'undefined' ? {} : TodosWeb, kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var H3_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledH3$lambda(it) {
    return new H3_init_0(html.emptyMap, it);
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda($receiver) {
    $receiver.videos = unwatchedVideos;
    return Unit;
  }
  function App$render$lambda$lambda_0($receiver) {
    $receiver.videos = watchedVideos;
    return Unit;
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    videoList($receiver_0_0, App$render$lambda$lambda);
    var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    videoList($receiver_0_0, App$render$lambda$lambda_0);
    $receiver.child_52psg1$($receiver_0_0.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0_3.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    var $receiver_0_4 = new StyledDOMBuilder_init(styledH3$lambda);
    var $receiver_2 = $receiver_0_4.css;
    set_color($receiver_2, Color.Companion.white);
    set_backgroundColor($receiver_2, Color.Companion.orange);
    set_paddingTop($receiver_2, get_px(10));
    set_paddingBottom($receiver_2, get_px(10));
    set_textAlign($receiver_2, TextAlign.center);
    set_borderRadius($receiver_2, get_px(5));
    $receiver_0_4.unaryPlus_pdl1vz$('John Doe: Building and breaking things');
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(img$lambda(null, null, null));
    $receiver_0_5.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
    $receiver_0_3.child_52psg1$($receiver_0_5.create());
    $receiver.child_52psg1$($receiver_0_3.create());
  };
  App.$metadata$ = {kind: Kind_CLASS, simpleName: 'App', interfaces: [RComponent]};
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda(closure$video) {
    return function (it) {
      window.alert('Clicked ' + closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      $receiver_0.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda(video));
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {kind: Kind_CLASS, simpleName: 'VideoList', interfaces: [RComponent]};
  var unwatchedVideos;
  var watchedVideos;
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
  function videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoList($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), videoList$lambda(handler));
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.App = App;
  var package$component = _.component || (_.component = {});
  package$component.VideoList = VideoList;
  _.main = main;
  var package$model = _.model || (_.model = {});
  package$model.Video = Video;
  var package$props = _.props || (_.props = {});
  package$props.videoList_1x8fgr$ = videoList;
  unwatchedVideos = listOf([new Video(1, 'Building and breaking things', 'John Doe', 'https://youtu.be/PsaFVLr8t4E'), new Video(2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new Video(3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E')]);
  watchedVideos = listOf_0(new Video(4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E'));
  main();
  return _;
}));

//# sourceMappingURL=TodosWeb.js.map
