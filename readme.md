# Email UI Components

This is a collection of React components designed for creating email templates with a focus on responsiveness and compatibility across different email clients.

## Components

### `Html` Component

**Props**

| Name      | Type        | Default  | Description                                                    |
|-----------|-------------|----------|---------------------------------------------------------------|
| children  | ReactNode   | -        | The content to be rendered inside the `<html>` element.          |
| dir       | string      | 'ltr'    | The text direction for the email (`ltr` or `rtl`).             |
| lang      | string      | 'en'     | The language of the email content (`'en'`, `'es'`, `'fr'`, etc.)|

### `Head` Component

**Props**

| Name      | Type        | Default | Description                                                    |
|-----------|-------------|---------|---------------------------------------------------------------|
| children  | ReactNode   | -       | The content to be rendered inside the `<head>` tag.           |

### `Body` Component

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| children  | ReactNode       | -         | The content to be rendered inside the `<body>` element. |
| center    | boolean         | false     | Whether to center the content horizontally.         |
| style     | CSSProperties   | {}        | Additional styles to apply to the container.        |

```ts
const emailHtml = createHtml(
    <Html>
    <Head/>
    <Body>
     ....
    </Body>
    </Html>
)
```

### `Container` Component
    It is the parent wrapper for heading, paragraph, image, button, link
**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| children  | ReactNode       | -         | The content to be wrapped inside the container.     |
| style     | CSSProperties   | {}        | Additional styles to apply to the container.        |

### `Heading` Component

    Parent wrapper - <Container>...</Container>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| Tag       | string          | 'h1'      | The HTML heading tag to use ('h1', 'h2', etc.).     |
| children  | ReactNode       | -         | The content inside the heading tag.                 |
| style     | CSSProperties   | {}        | Additional styles for the heading.                  |

### `Paragraph` Component

    Parent wrapper - <Container>...</Container>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| children  | ReactNode       | -         | The content to be rendered inside the paragraph tag. |
| style     | CSSProperties   | {}        | Additional styles for the paragraph.                |

### `Button` Component

    Parent wrapper - <Container>...</Container>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| href      | string          | ''        | The URL the button links to.                        |
| target    | string          | '_blank'  | The target for the link ('_blank' or other valid values). |
| children  | ReactNode       | -         | The content inside the button.                      |
| style     | CSSProperties   | {}        | Additional styles for the button.                   |


### `Divider` Component 

    Parent wrapper - <Container>...</Container>

**Props**

| Name           | Type      | Default    | Description                                         |
|----------------|-----------|------------|-----------------------------------------------------|
| dividerStyle   | string    | 'solid'    | The style of the divider ('solid', 'dotted', 'dashed'). |
| color          | string    | 'black'    | The color of the divider line.                      |
| thickness      | string    | '1px'      | The thickness of the divider line.                  |

### `Image` Component

    Parent wrapper - <Container>...</Container>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| src       | string          | -         | The source URL of the image.                        |
| alt       | string          | 'image'   | The alt text for the image.                         |
| height    | string          | '100%'    | The height of the image.                            |
| width     | string          | '100%'    | The width of the image.                             |
| style     | CSSProperties   | {}        | Additional styles for the image.                    |

### `Link` Component

    Parent wrapper - <Container>...</Container>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| href      | string          | -         | The URL the link points to.                         |
| target    | string          | '_blank'  | The target for the link ('_blank', '_self', etc.).  |
| children  | ReactNode       | -         | The content inside the link.                        |
| style     | CSSProperties   | {}        | Additional styles for the link.                     |

```ts
const emailHtml = createHtml(
    <Html>
        <Head/>
        <Body>
            <Container>
            <Heading>Hello Heading<Heading>
            or
            <Paragraph/>
            or
            <Button/>
            or
            <Image/>
            or 
            <Link/>
            </Container>
            or<Divider/>
        </Body>
    </Html>
)
```

### `Row` Component

**Props**

| Name      | Type        | Default  | Description                                         |
|-----------|-------------|----------|-----------------------------------------------------|
| children  | ReactNode   | -        | The content inside the row.                         |
| responsive| boolean     | false    | Whether the row should be responsive (displayed as a single column on smaller screens). |

### `Column` Component

 Parent wrapper - <Row>...<Row>

**Props**

| Name      | Type            | Default   | Description                                         |
|-----------|-----------------|-----------|-----------------------------------------------------|
| children  | ReactNode       | -         | The content to be wrapped inside the column.        |
| style     | CSSProperties   | {}        | Additional styles for the column.                   |


```ts
const emailHtml = createHtml(
    <Html>
        <Head/>
        <Body>
            <Container>
                <Row>
                    <Column>
                        <Container>
                            <Heading/>
                            <Paragrph/>
                        </Container>
                    </Column>
                <Row>
            </Container>
        </Body>
    </Html>
)
```


### `createHtml` Function

A utility function to render React components as static HTML strings.

**Usage**

```ts
const emailHtml = createHtml(<YourComponent />);

<Preview emailHtml={emailHtml} />;

