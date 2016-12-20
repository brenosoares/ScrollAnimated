# ScrollAnimated

Simple and easy way for animate a elements when your page scroll.


# Basic Usage

###Include the stylesheet on your document's ``<head>``
Scroll Animated use a style with animations based in [Animate.CSS](https://daneden.github.io/animate.css/)

```html
<head>
  <link rel="stylesheet" href="scrollAnimated.css">
</head>
```

###Include the javascript on your document's

```html
<script src="/scrollAnimated.js" type="text/javascript"></script>
```

###Initialize Scroll Animated

```javascript
var myScroll = new ScrollAnimated({
			element: '.myElemt',
			effect: 'myEffect',
			time: 0.5,
			delay: 1
		});
```


# Effects Classes

* `bounce`
* `flash`
* `pulse`
* `rubberBand`
* `shake`
* `headShake`
* `swing`
* `tada`
* `wobble`
* `jello`
* `bounceIn`
* `bounceInDown`
* `bounceInLeft`
* `bounceInRight`
* `bounceInUp`
* `fadeIn`
* `fadeInDown`
* `fadeInDownBig`
* `fadeInLeft`
* `fadeInLeftBig`
* `fadeInRight`
* `fadeInRightBig`
* `fadeInUp`
* `fadeInUpBig`
* `flipInX`
* `flipInY`
* `lightSpeedIn`
* `rotateIn`
* `rotateInDownLeft`
* `rotateInDownRight`
* `rotateInUpLeft`
* `rotateInUpRight`
* `hinge`
* `rollIn`
* `zoomIn`
* `zoomInDown`
* `zoomInLeft`
* `zoomInRight`
* `zoomInUp`
* `slideInDown`
* `slideInLeft`
* `slideInRight`
* `slideInUp`


## License

Scroll Animated is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Pull requests are the way to go here. All changes should be committed to `src/` files. I only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That last one is important.
