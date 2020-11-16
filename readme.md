# Material Testimonial Card

## Installation

* Run `npm install material-testimonial-card` in your project.
* Import in your project using `import TestimonialCard from 'material-testimonial-card';`

## Usage

`<TestimonialCard {...props} />`

## Props

* **name** (`required` **|** `string` **|** `default:''`) - the author of the testimonial
* **image** (`optional` **|** `string` **|** `default:''`) - the image of the author of the testimonial
* **content** (`required` **|** `string` **|** `default:''`) - the content of the testimonial
* **project** (`required` **|** `string` **|** `default:''`) - the project/work the testimonial references to
* **className** (`optional` **|** `string` **|** `default:''`) - for styling and customization

## Customization

You can refer to the following css classNames to customize each part of the card.

* `testimonial-avatar-container` : the avatar container
* `testimonial-avatar` : the avatar (image or text)
* `testimonial-body` : the container of the content of the testimonial
* `testimonial-author` : the container of the author and the project of the testimonial

For more info, you can check the github repo.

## Sample Usage
```JSX
import React from 'react';
import TestimonialCard from 'material-testimonial-card';

const Component = () => {
	return <TestimonialCard
		name={"John Smith"}
		image={"/path/to/image.jpg"}
		content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
		project={"Testimonial card"}
	/>
}

export default Component;
```

## Demo

![Image sample](https://s3.us-east-2.amazonaws.com/alphadev-utils/git-images/material-testimonial-card/demo1.png)

