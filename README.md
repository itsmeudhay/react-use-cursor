# React Use Cursor - Dynamic Cursor Management for React Applications

**React Use Cursor** is a custom React hook designed for creating and managing dynamic cursor effects in your React applications. This hook allows developers to easily customize the cursor's appearance, including size, color, shape, and transition effects, enhancing user interaction and visual feedback.

## Key Features
- **Customizable Cursor**: Easily adjust the size, color, and shape of the cursor.
- **Smooth Transitions**: Control the transition duration and follow speed for a responsive experience.
- **Flexible Integration**: Embed any HTML or React component within the cursor element.

## Installation

Install the package using npm or yarn:

```bash
npm install react-use-cursor
# or
yarn add react-use-cursor
```

## Usage

### 1. **Import the Hook:**

To use the `react-use-cursor` hook in your component, import it as follows:

```javascript
import reactUseCursor from 'react-use-cursor';
```

### 2. **Use the Hook in Your Component:**

Here is an example of how to implement the custom cursor in your application:

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 70,
    color: 'rgba(0, 123, 255, 0.3)',
    shape: 'circle',
    transitionDuration: '0.4s',
    followSpeed: '0.4s',
    customStyles: {
      borderRadius: '50%',
      boxShadow: '0 0 15px rgba(0, 123, 255, 0.6)',
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.95,
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">App Page</h1>
      <div className="relative w-full">
        <div className="h-[2000px] flex flex-col items-center justify-center">
          <h2 className="text-xl mb-4">Hover around to see the custom cursor</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
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

In the example above:
- **`cursorRef`**: A React reference that should be attached to the custom cursor element.
- **`mergedStyles`**: The combined styles of the cursor element, including any default styles and custom styles provided via the `options` object.

## Next.js Implementation

To use the `react-use-cursor` hook in a Next.js application, follow these steps:

### 1. **Create a Custom Cursor Component**

Create a new component, `UseCursor.tsx`, with the following code:

```javascript
"use client";
import Image from 'next/image';
import reactUseCursor from 'react-use-cursor';
import React from 'react';

// Define the type for cursorOptions
interface CustomCursorOptions extends Omit<React.CSSProperties, 'shape'> {
  shape?: 'circle' | 'square';
  color?: string;
  transitionDuration?: string;
  followSpeed?: string;
  customStyles?: React.CSSProperties;
  size?: number;
}

const cursorOptions: CustomCursorOptions = {
    size: 120,
    color: 'rgba(0, 123, 255, 0.3)', // Color for the cursor
    shape: 'circle',
    transitionDuration: '0.4s',
    followSpeed: '0.4s',
    customStyles: {
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for glass effect
      backdropFilter: 'blur(20px)', // Blur the background behind the cursor
      boxShadow: '0 4px 20px rgba(0, 123, 255, 0.6)', // Soft blue shadow for a glowing effect
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.9, // Slightly reduced opacity for a more subtle effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
};

export default function UseCursor() {
  const { cursorRef, mergedStyles } = reactUseCursor(cursorOptions);

  return (
    <div ref={cursorRef} style={mergedStyles as React.CSSProperties}>
      <Image src="/next.svg" alt="Custom Next JS animated cursor" width={96} height={96} />
    </div>
  );
}
```

### 2. **Use the Custom Cursor in Your Page**

In your Next.js page (e.g., `pages/index.tsx`), import and use the `UseCursor` component:

```javascript
import UseCursor from "./components/UseCursor";

export default function Home() {
  return (
    <div>
      <h1 className="text-9xl text-teal-700 font-bold underline">
        Hello Buddy!
      </h1>
      <UseCursor />
    </div>
  );
}
```

## API

### `reactUseCursor(options)`

This hook accepts an options object to configure the cursor's appearance and behavior. It returns an object containing the `cursorRef` and `mergedStyles`.

#### Parameters:

- **`size`** (number, optional): The size of the cursor in pixels. Default is `50`.
- **`color`** (string, optional): The background color of the cursor. Default is `'black'`.
- **`shape`** (string, optional): The shape of the cursor. Can be `'circle'` or `'square'`. Default is `'circle'`.
- **`transitionDuration`** (string, optional): The duration of the transition effect when the cursor moves. Default is `'0.1s'`.
- **`followSpeed`** (string, optional): The speed at which the cursor follows the mouse. Default is `'0.1s'`.
- **`customStyles`** (React.CSSProperties, optional): An object containing additional custom styles for the cursor (e.g., `boxShadow`, `borderRadius`). Default is `{}`.

#### Returns:

- **`cursorRef`** (React.RefObject<HTMLDivElement>): A reference to attach to the custom cursor element.
- **`mergedStyles`** (React.CSSProperties): The combined styles for the custom cursor, including default and custom styles.

## Use Cases and Examples

### 1. **Basic Custom Cursor**

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 50,
    color: 'blue',
    shape: 'circle',
    transitionDuration: '0.3s',
    followSpeed: '0.2s',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div ref={cursorRef} style={mergedStyles} />
    </div>
  );
};

export default App;
```

### 2. **Cursor with Text**

```javascript
import reactUseCursor from 'react-use-cursor';

const App = () => {
  const { cursorRef, mergedStyles } = reactUseCursor({
    size: 60,
    color: 'green',
    shape: 'square',
    transitionDuration: '0.4s',
    followSpeed: '0.3s',
    customStyles: {
      color: 'black',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: 'transform 0.4s ease, background-color 0.3s ease',
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

### 3. **Cursor with Image**

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
      opacity: 0.9,
      boxShadow: '0 0 15px rgba(255, 99, 71, 0.8)',
      borderRadius: '50%',
      transition: 'transform 0.6s ease, opacity 0.4s ease, box-shadow 0.5s ease',
    },
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

- **Performance**: The hook leverages `requestAnimationFrame` to ensure smooth cursor movement and optimize performance.
- **Customization**: The `customStyles` option allows you to add extensive customizations, enabling you to craft unique cursor behaviors, effects, and styles.
- **Ref Management**: The `cursorRef` ensures the custom cursor element is correctly managed and updated during interactions.
- **Flexibility**: You can embed any HTML or React component (text, images, SVGs, etc.) within the cursor element, providing maximum flexibility in terms of design.
- **One Cursor at a Time**: Ensure that only one cursor element is present in your application at any given time. Multiple cursors with the same reference may cause conflicts or visual issues.

## License

This project is licensed under the MIT License.
