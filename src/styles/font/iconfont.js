/* eslint-disable*/
!(function (e) {
	var t,
		n,
		o,
		i,
		c,
		d,
		l =
			'<svg><symbol id="icondianhua" viewBox="0 0 1024 1024"><path d="M408.283 428.103c29.865-29.895 55.898-48.296 2.968-114.189-52.933-65.89-88.241-15.292-117.212 13.681-33.379 33.406-1.759 157.93 121.33 281.043 123.087 123.055 247.642 154.734 281.05 121.299 28.97-28.944 79.54-64.22 13.68-117.18-65.86-52.96-84.294-26.927-114.188 2.964-20.908 20.822-73.697-22.75-119.314-68.338-45.618-45.588-89.22-98.403-68.314-119.28zM512 998.4c268.631 0 486.4-217.769 486.4-486.4S780.631 25.6 512 25.6 25.6 243.369 25.6 512 243.369 998.4 512 998.4z m0 25.6C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z"  ></path></symbol><symbol id="icondocx" viewBox="0 0 1024 1024"><path d="M809.628 894.653H214.372c-46.76 0-85.025-38.265-85.025-85.025V214.372c0-46.76 38.265-85.025 85.025-85.025h595.256c46.76 0 85.025 38.265 85.025 85.025v595.256c0 46.76-38.265 85.025-85.025 85.025zM764.99 319.047H711.42l-75.727 292.73c-4 14.445-6.41 27.072-7.233 37.882h-0.994c-1.665-14.961-3.808-27.244-6.467-36.906l-79.726-293.687h-49.075L408.74 610.533c-4.668 16.435-7.385 29.637-8.227 39.605h-1.492a190.561 190.561 0 0 0-6.238-39.605l-78.711-291.486h-55.064l111.869 385.906h57.55l78.444-278.514a186.103 186.103 0 0 0 6.984-39.375h0.995c0.689 13.947 2.755 27.226 6.237 39.853l77.736 278.017h58.048l108.1-385.887z" fill="#3A80FC" ></path></symbol></svg>',
		a = (a = document.getElementsByTagName('script'))[
			a.length - 1
		].getAttribute('data-injectcss')
	if (a && !e.__iconfont__svg__cssinject__) {
		e.__iconfont__svg__cssinject__ = !0
		try {
			document.write(
				'<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
			)
		} catch (e) {
			console && console.log(e)
		}
	}
	function s() {
		c || ((c = !0), o())
	}
	;(t = function () {
		var e, t, n, o
		;((o = document.createElement('div')).innerHTML = l),
			(l = null),
			(n = o.getElementsByTagName('svg')[0]) &&
				(n.setAttribute('aria-hidden', 'true'),
				(n.style.position = 'absolute'),
				(n.style.width = 0),
				(n.style.height = 0),
				(n.style.overflow = 'hidden'),
				(e = n),
				(t = document.body).firstChild
					? ((o = e),
					  (n = t.firstChild).parentNode.insertBefore(o, n))
					: t.appendChild(e))
	}),
		document.addEventListener
			? ~['complete', 'loaded', 'interactive'].indexOf(
					document.readyState
			  )
				? setTimeout(t, 0)
				: ((n = function () {
						document.removeEventListener('DOMContentLoaded', n, !1),
							t()
				  }),
				  document.addEventListener('DOMContentLoaded', n, !1))
			: document.attachEvent &&
			  ((o = t),
			  (i = e.document),
			  (c = !1),
			  (d = function () {
					try {
						i.documentElement.doScroll('left')
					} catch (e) {
						return void setTimeout(d, 50)
					}
					s()
			  })(),
			  (i.onreadystatechange = function () {
					'complete' == i.readyState &&
						((i.onreadystatechange = null), s())
			  }))
})(window)
