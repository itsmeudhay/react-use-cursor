# React Use Cursor - Detailed Documentation and Usage

This document provides a comprehensive guide to using the `react-use-cursor` package, a custom React hook designed to create and manage custom cursor effects.

## Introduction

The `react-use-cursor` hook allows developers to easily implement custom cursors in their React applications. It provides options to customize the cursor's size, color, shape, transition speed, and more. This enhances the user experience by adding unique visual feedback.

## Installation

Install the package using npm or yarn:

```bash
npm install react-use-cursor
# or
yarn add react-use-cursor
```

## Usage

1. **Import the Hook:**

   ```javascript
   import reactUseCursor from 'react-use-cursor';
   ```

2. **Use the Hook in Your Component:**

   Here's an example of how to implement the custom cursor in your application:

   ```javascript
   import reactUseCursor from 'react-use-cursor';

   const App = () => {
     const { cursorRef, mergedStyles } = reactUseCursor({
       size: 60,
       color: 'transparent',
       shape: 'circle',
       transitionDuration: '0.2s',
       followSpeed: '0.1s',
       customStyles: {
         // Add any custom styles here
       },
     });

     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <h1 className="text-3xl font-bold mb-4">App Page</h1>
         <div className="relative w-full">
           <div className="h-[2000px] flex flex-col items-center justify-center">
             <h2 className="text-xl mb-4">Hover around to see the custom cursor</h2>
             <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200">Click Me!</button>
           </div>
           {/* Custom Cursor */}
           <div ref={cursorRef} style={mergedStyles}>
             <img src="/public/vite.svg" alt="cursor-png" className="w-12 h-12" />
           </div>
         </div>
       </div>
     );
   };

   export default App;
   ```

## API

### `reactUseCursor(options)`

This hook takes an `options` object as a parameter and returns an object containing the cursor reference and merged styles.

- **Parameters**:
  - `size` (number, optional): The size of the cursor in pixels. Default is `50`.
  - `color` (string, optional): The background color of the cursor. Default is `'black'`.
  - `shape` (string, optional): The shape of the cursor. Can be `'circle'` or `'square'`. Default is `'circle'`.
  - `transitionDuration` (string, optional): The duration of the transition effect when the cursor moves. Default is `'0.1s'`.
  - `followSpeed` (string, optional): The speed at which the cursor follows the mouse. Default is `'0.1s'`.
  - `customStyles` (React.CSSProperties, optional): An object containing additional custom styles for the cursor. Default is `{}`.

- **Returns**:
  - `cursorRef` (React.RefObject<HTMLDivElement>): A ref to attach to the custom cursor element.
  - `mergedStyles` (React.CSSProperties): The combined styles for the custom cursor, including default and custom styles.

## Use Cases and Examples

Here are a few examples demonstrating the versatility of the `react-use-cursor` hook:

### 1. Basic Custom Cursor

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 50,
    color: 'transparent',
    shape: 'square',
    transitionDuration: '0.6s',
    followSpeed: '0.8s',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div ref={cursorRef} style={mergedStyles} />
    </div>
  );
};

export default App;
```

### 2. Cursor with Text

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 50,
    color: 'transparent',
    shape: 'square',
    transitionDuration: '0.6s',
    followSpeed: '0.8s',
    customStyles: {
      color: "black",
      fontSize: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div ref={cursorRef} style={mergedStyles}>
        <h1 className="text-light-50">Hello Buddy</h1>
      </div>
    </div>
  );
};

export default App;
```

### 3. Cursor with Image

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 50,
    color: 'transparent',
    shape: 'square',
    transitionDuration: '0.6s',
    followSpeed: '0.8s',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div ref={cursorRef} style={mergedStyles}>
        <img src="/public/vite.svg" alt="cursor-png" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default App;
```

## Key Considerations

- **Performance**: The hook utilizes `requestAnimationFrame` for smooth cursor movement, ensuring optimal performance.
- **Customization**: The `customStyles` option allows for extensive customization, enabling developers to create unique cursor effects.
- **Ref Management**: The `cursorRef` ensures that the cursor element is properly managed and updated.
- **Flexibility**: You can insert any element into the cursor div, allowing for text, images, or even complex components.
- **One Cursor at a Time**: It is crucial to use only one cursor div in your application, as multiple cursor divs with the same ref will conflict.

## License

This project is licensed under the MIT License.
