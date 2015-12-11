function acquire($lib, $fn) 
{
  var xhr, module, async;
  module = { };
  async = false;
  if (typeof $fn == 'function') 
  {
    async = true;
  }
  xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://hominoidea.github.io/package/' + $lib + '/index.js', async);
  xhr.onreadystatechange = function () 
  {
        if (xhr.readyState === 4 && xhr.status == 200) 
        {
            if (async) 
            { 
              eval(xhr.responseText);
                return $fn(module.exports);
            } 
        }
    };
  xhr.send('lib='+$lib);
  if (!async) 
  {
    eval(xhr.responseText);
    return module.exports;
  }
}