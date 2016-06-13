# EZ-CSS

An easy way to use one-off CSS styles without in-line styling or cluttering up your stylesheet.

## Documentation

### Syntax

- Using EZ-CSS is as easy as entering a few class names. You have several options of how you do this to keep this as universal as possible. The general syntax is:

```
ez-[CSS-propery]-[value] | ez-color-green
```

* If the CSS propery or value has a hyphen (-) swap it out for an underscore (_)
```
ez-background_repeat-no_repeat
```

- EZ-CSS offers more granular controls such as being able to specify up to 4 controls to change at once, such could be the case for padding or margin:
```
ez-margin-top-left-bottom-20px
```

- EZ-CSS also allows for multiple values in the case of shorthand using the pipe (|) seperator
```
ez-background-url('http://placehold.it/350x150')|no_repeat|center|center|#006600
```

- You can use as many EZ-CSS classes as you want on a particular element
```
<div class="ez-background_color-skyblue ez-height-100px ez-width-200px ez-padding-10px|20px|30px|40px ez-color-blue ez-font-size-2em ez-font-weight-bold">
    Example
</div>
```

Auto generates to
```
<div class="ez-background_color-skyblue ez-height-100px ez-width-200px ez-padding-10px|20px|30px|40px ez-color-blue ez-font-size-2em ez-font-weight-bold" style="background-color: skyblue; height: 100px; width: 200px; padding: 10px 20px 30px 40px; color: blue; font-size: 2em; font-weight: bold;">
    Example
</div>
````

### Demo
A demo is available http://joelsparker.com/ez-css/demo.html