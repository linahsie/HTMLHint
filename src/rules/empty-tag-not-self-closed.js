export default {
  id: 'empty-tag-not-self-closed',
  description: 'Empty tags does not need to be self closed.',
  init: function(parser, reporter) {
    var self = this;
    var mapEmptyTags = parser.makeMap(
      'area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr'
    ); //HTML 4.01 + HTML 5
    parser.addListener('tagstart', function(event) {
      var tagName = event.tagName.toLowerCase();
      if (mapEmptyTags[tagName] !== undefined) {
        if (event.close) {
          reporter.warn(
            'The empty tag : [ ' +
              tagName +
              ' ] does not need to be self closed.',
            event.line,
            event.col,
            self,
            event.raw
          );
        }
      }
    });
  }
};
