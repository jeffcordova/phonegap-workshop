var app = {

    registerEvents: function(){
        var self = this;

        // Check if browser supports touch events
        if(document.documentElement.hasOwnProperty('ontouchstart')){
            $('body').on('touchstart', 'a', function(event){
                $(event.target).addClass('tappable-active');
            });

            $('body').on('touchend', 'a', function(event){
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event){
                console.log('mousedown');
                $(event.target).addClass('tappable-active');
            });

            $('body').on('mouseup', 'a', function(event){
                console.log('mouseup');
                $(event.target).removeClass('tappable-active');
            })
        }
    },

    showAlert: function(message, title){
        if(navigator.notification){
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    initialize: function() {
        var self = this;
        this.registerEvents();
        this.store = new MemoryStore(function(){
            $('body').html(new HomeView(self.store).render().el);
        });
    }
};

app.initialize();