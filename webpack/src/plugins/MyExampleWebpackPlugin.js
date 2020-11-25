class MyExampleWebpackPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {

        const filelist = 'hello'
        
        compilation.assets['filelist.md'] = {
          source: function() {
            return filelist;
          },
          size: function() {
            return filelist.length;
          }
        };
  
        callback();
      }
    );
  }
}

module.exports = MyExampleWebpackPlugin