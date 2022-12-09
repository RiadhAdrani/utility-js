import{_ as s,c as o,o as l,a}from"./app.fa48b1f3.js";const D=JSON.parse('{"title":"Colors","description":"","frontmatter":{},"headers":[{"level":2,"title":"getColorType()","slug":"getcolortype","link":"#getcolortype","children":[]},{"level":2,"title":"hsla()","slug":"hsla","link":"#hsla","children":[]},{"level":2,"title":"rgba()","slug":"rgba","link":"#rgba","children":[]},{"level":2,"title":"isRgbForm()","slug":"isrgbform","link":"#isrgbform","children":[]},{"level":2,"title":"isRgbaForm()","slug":"isrgbaform","link":"#isrgbaform","children":[]},{"level":2,"title":"extractDataFromRGB()","slug":"extractdatafromrgb","link":"#extractdatafromrgb","children":[]},{"level":2,"title":"isRgbColor()","slug":"isrgbcolor","link":"#isrgbcolor","children":[]},{"level":2,"title":"isHexColor()","slug":"ishexcolor","link":"#ishexcolor","children":[]},{"level":2,"title":"isHslForm()","slug":"ishslform","link":"#ishslform","children":[]},{"level":2,"title":"isHslaForm()","slug":"ishslaform","link":"#ishslaform","children":[]},{"level":2,"title":"extractDataFromHSL()","slug":"extractdatafromhsl","link":"#extractdatafromhsl","children":[]},{"level":2,"title":"isHslColor()","slug":"ishslcolor","link":"#ishslcolor","children":[]},{"level":2,"title":"hslToRgb()","slug":"hsltorgb","link":"#hsltorgb","children":[]},{"level":2,"title":"rgbToHsl()","slug":"rgbtohsl","link":"#rgbtohsl","children":[]},{"level":2,"title":"rgbToHex()","slug":"rgbtohex","link":"#rgbtohex","children":[]},{"level":2,"title":"convertColor()","slug":"convertcolor","link":"#convertcolor","children":[]},{"level":2,"title":"generateContrastSafeColor()","slug":"generatecontrastsafecolor","link":"#generatecontrastsafecolor","children":[]},{"level":2,"title":"generateComplementaryColor()","slug":"generatecomplementarycolor","link":"#generatecomplementarycolor","children":[]},{"level":2,"title":"generateColorTonalPalette()","slug":"generatecolortonalpalette","link":"#generatecolortonalpalette","children":[]},{"level":2,"title":"changeColorOpacity()","slug":"changecoloropacity","link":"#changecoloropacity","children":[]}],"relativePath":"colors.md"}'),e={name:"colors.md"},n=a(`<h1 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h1><h2 id="getcolortype" tabindex="-1">getColorType() <a class="header-anchor" href="#getcolortype" aria-hidden="true">#</a></h2><p>resolve the correct type of the color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getColorType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColorTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">unknown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="hsla" tabindex="-1">hsla() <a class="header-anchor" href="#hsla" aria-hidden="true">#</a></h2><p>create an hsla color form.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hsla</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>h</code></em> : hue.</li><li><em><code>s</code></em> : saturation.</li><li><em><code>l</code></em> : lightness.</li><li><em><code>a</code></em> : alpha, by default set to <code>1</code>.</li></ul><blockquote><p>throws when <code>h</code> is not between <code>0..360</code></p></blockquote><blockquote><p>throws when <code>s</code> is not between <code>0..100</code></p></blockquote><blockquote><p>throws when <code>l</code> is not between <code>0..100</code></p></blockquote><blockquote><p>throws when <code>a</code> is not between <code>0..1</code></p></blockquote><h2 id="rgba" tabindex="-1">rgba() <a class="header-anchor" href="#rgba" aria-hidden="true">#</a></h2><p>create an rgba color form.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>r</code></em> : red.</li><li><em><code>g</code></em> : green.</li><li><em><code>b</code></em> : blue.</li><li><em><code>a</code></em> : alpha, by default set to <code>1</code>.</li></ul><blockquote><p>throws when <code>r</code> is not between <code>0..255</code></p></blockquote><blockquote><p>throws when <code>g</code> is not between <code>0..255</code></p></blockquote><blockquote><p>throws when <code>b</code> is not between <code>0..255</code></p></blockquote><blockquote><p>throws when <code>a</code> is not between <code>0..1</code></p></blockquote><h2 id="isrgbform" tabindex="-1">isRgbForm() <a class="header-anchor" href="#isrgbform" aria-hidden="true">#</a></h2><p>checks if the given color is of an <code>rgb</code> form.</p><p>note that red, green and blue values are not checked.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isRgbForm</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="isrgbaform" tabindex="-1">isRgbaForm() <a class="header-anchor" href="#isrgbaform" aria-hidden="true">#</a></h2><p>checks if the given color is of an <code>rgba</code> form.</p><p>note that red, blue, green and alpha values are not checked.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isRgbaForm</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="extractdatafromrgb" tabindex="-1">extractDataFromRGB() <a class="header-anchor" href="#extractdatafromrgb" aria-hidden="true">#</a></h2><p>extract data from an <code>rgb/a</code> color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">extractDataFromRGB</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><blockquote><p>throws if the type of the color is not <code>rgb/a</code></p></blockquote><h2 id="isrgbcolor" tabindex="-1">isRgbColor() <a class="header-anchor" href="#isrgbcolor" aria-hidden="true">#</a></h2><p>checks if the given string is a <code>rgb/a</code> color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isRgbColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="ishexcolor" tabindex="-1">isHexColor() <a class="header-anchor" href="#ishexcolor" aria-hidden="true">#</a></h2><p>Checks if the given string is a hex color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isHexColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="ishslform" tabindex="-1">isHslForm() <a class="header-anchor" href="#ishslform" aria-hidden="true">#</a></h2><p>checks if the given color is of an <code>hsl</code> form.</p><p>note that hue, saturation, lightness values are not checked.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isHslForm</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="ishslaform" tabindex="-1">isHslaForm() <a class="header-anchor" href="#ishslaform" aria-hidden="true">#</a></h2><p>checks if the given color is of an <code>hsla</code> form.</p><p>note that hue, saturation, lightness and alpha values are not checked.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isHslaForm</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="extractdatafromhsl" tabindex="-1">extractDataFromHSL() <a class="header-anchor" href="#extractdatafromhsl" aria-hidden="true">#</a></h2><p>extract data from an <code>hsl/a</code> color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">extractDataFromHSL</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><blockquote><p>throws if the type of the color is not <code>hsl/a</code></p></blockquote><h2 id="ishslcolor" tabindex="-1">isHslColor() <a class="header-anchor" href="#ishslcolor" aria-hidden="true">#</a></h2><p>checks if the given string is a <code>hsl/a</code> color.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isHslColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : target color.</li></ul><h2 id="hsltorgb" tabindex="-1">hslToRgb() <a class="header-anchor" href="#hsltorgb" aria-hidden="true">#</a></h2><p>convert HSL color to RGB</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hslToRgb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>h</code></em> : hue.</li><li><em><code>s</code></em> : saturation.</li><li><em><code>l</code></em> : lightness.</li></ul><h2 id="rgbtohsl" tabindex="-1">rgbToHsl() <a class="header-anchor" href="#rgbtohsl" aria-hidden="true">#</a></h2><p>convert RGB color to HSL</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgbToHsl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>r</code></em> : red.</li><li><em><code>g</code></em> : green.</li><li><em><code>b</code></em> : blue.</li></ul><h2 id="rgbtohex" tabindex="-1">rgbToHex() <a class="header-anchor" href="#rgbtohex" aria-hidden="true">#</a></h2><p>convert RGB color to HEX.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgbToHsl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>r</code></em> : red.</li><li><em><code>g</code></em> : green.</li><li><em><code>b</code></em> : blue.</li></ul><h2 id="convertcolor" tabindex="-1">convertColor() <a class="header-anchor" href="#convertcolor" aria-hidden="true">#</a></h2><p>convert a color to a given type.</p><p>if the <code>type</code> of the source color is not identifiable, the function will return it as it is.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">convertColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColorTypes</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : color as string.</li><li><em><code>to</code></em> : resulting color type.</li></ul><h2 id="generatecontrastsafecolor" tabindex="-1">generateContrastSafeColor() <a class="header-anchor" href="#generatecontrastsafecolor" aria-hidden="true">#</a></h2><p>generates a contrasting color to the source.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateContrastSafeColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : color as string.</li><li><em><code>light</code></em> : returned color if the given color is dark. <code>#fff</code> by default.</li><li><em><code>dark</code></em> : returned color if the given color is dark. <code>#000</code> by default.</li></ul><blockquote><p>throws when color type is non-identifiable.</p></blockquote><h2 id="generatecomplementarycolor" tabindex="-1">generateComplementaryColor() <a class="header-anchor" href="#generatecomplementarycolor" aria-hidden="true">#</a></h2><p>generates a contrasting color to the source.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateComplementaryColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColorTypes</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : color as string.</li><li><em><code>to</code></em> : resulting color type.</li></ul><blockquote><p>throws when color type is non-identifiable.</p></blockquote><h2 id="generatecolortonalpalette" tabindex="-1">generateColorTonalPalette() <a class="header-anchor" href="#generatecolortonalpalette" aria-hidden="true">#</a></h2><p>generates a tonal palette object according to the <a href="https://m3.material.io/styles/color/the-color-system/key-colors-tones#6bdb9471-b70d-42c9-8ace-76743c1fff13" target="_blank" rel="noreferrer">material specification</a>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateComplementaryColor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColorTypes</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Palette</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : color as string.</li><li><em><code>to</code></em> : resulting colors type.</li></ul><blockquote><p>throws when color type is non-identifiable.</p></blockquote><h2 id="changecoloropacity" tabindex="-1">changeColorOpacity() <a class="header-anchor" href="#changecoloropacity" aria-hidden="true">#</a></h2><p>create a new color with changed opacity.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeColorOpacity</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColorTypes</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>color</code></em> : color as string.</li><li><em><code>opacity</code></em> : opacity value between <code>0</code> and <code>1</code>.</li><li><em><code>to</code></em> : resulting colors type. <code>hex</code> by default.</li></ul><blockquote><p>throws when color type is non-identifiable.</p></blockquote><blockquote><p>throws an error when opacity is not between <code>0</code> and <code>1</code>.</p></blockquote>`,101),p=[n];function t(c,r,i,y,C,F){return l(),o("div",null,p)}const A=s(e,[["render",t]]);export{D as __pageData,A as default};
