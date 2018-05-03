new Vue({
  el: '#app',
  data: {
    contents: [{
      title: 'content 1',
      bg_color: '#7bbff9',
    },
    {
      title: 'content 2',
      bg_color: '#f16972',
    },{
      title: 'content 3',
      bg_color: '#20d2d3',
    }],
    transition_name: 'show-next',
    visible_content: 0,
    contents_number: null,
    touch: {
        dragging: false,
        start: { x: 0, y: 0 }
    }
  },
  methods: {
    back() {
      this.transition_name = 'show-prev';
      if((this.visible_content - 1) === -1) {
        this.visible_content = (this.contents_number - 1);
      }else{
        this.visible_content--;
      }
    },
    next() {
      this.transition_name = 'show-next';
      this.visible_content =  (this.visible_content + 1) % this.contents_number;
    },
    startDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.dragging = true;
      this.touch.start.x = e.pageX;
    },
    stopDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      if(this.dragging) {   
        if ((this.touch.start.x - e.pageX) > 50) {
          this.next(); 
        } else if (-50 > (this.touch.start.x - e.pageX)) {
          this.back();
        }
      }
    }
  },
  mounted: function() {
    this.contents_number = this.contents.length;
  }
});
