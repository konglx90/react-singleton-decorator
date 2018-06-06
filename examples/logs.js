export default function log(target, name, descriptor) {
  let message = `LOG: Calling \`${name}\` function.`;

  if (typeof target === 'string') {
    message = target;

    return (target, name, descriptor) => {
      console.log(`LOG: ${message}`, name);
      return descriptor;
    };
  } else {
    console.log(message);
    return descriptor;
  }
}
