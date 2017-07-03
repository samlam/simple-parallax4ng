# SimpleParallax4ng

create a simple parallax background effect; designed to be consumed by Angular with Typescript applications

## Development server

Run `npm start` or `ng serve` for demo server. Navigate to `http://localhost:4200/`.

## Install

Install the library

```bash
npm install -D simple-parallax4ng
```

## Usage

Adding the module
```javascript
import { SimpleParallaxModule } from 'simple-parallax4ng'; // import the module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SimpleParallaxModule  // import the module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Adding the `simple-parallax` custom markup
```html
<simple-parallax 
  eleId="slide1" 
  bgUrl="url(../assets/images/wp1.jpg)"
  height=100
  style="color:antiquewhite">
</simple-parallax>
```

## API Information


* `eleId` - unique element identifier
* `bgUrl` - location of the background image, used with url() function;
* `bgColor` - apply solid color background;
* `paraBackground: scroll or fixed` - effect of the background
* `height: number` - height of the background
* `padding` - padding information


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

~~Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).~~

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## License

MIT