// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.json());
// static content
app.use(express.static(__dirname + '/public/dist/public'));


var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/teams_db');

var PlayerSchema = new mongoose.Schema({
    name: {type: String},
    pref_pos: {type: String, default: "None"},
    status: {}},
    {timestamps: true}
);

mongoose.model("Player", PlayerSchema);
var Player = mongoose.model("Player");


function validator(data) {
    var errors = [];
    var name = data.name.trim();

    if(name.length < 2) {
        errors.push({
            error: "name",
            message: "Name must be 2+ letters long."
        })
    }

    return errors;
}


// root route to render the index.ejs view
app.get('/getPlayers', function(req, res) {
    Player.find({}, function(err, players) {
        if(err) {
            return res.json({ hasErrors: true, errors: err });
        }
        else {
            return res.json(players);
        }
    });
})


// post route for adding a user
app.post('/newPlayer', function(req, res) {
    var errors = validator(req.body);

    if(errors.length > 0) {
        return res.json({ hasErrors: true, errors: errors });
    }
    else {
        var newPlayer = new Player(req.body);
        newPlayer.status = {
            game1: { playing: "white", notPlaying: "white", undecided: "yellow" },
            game2: { playing: "white", notPlaying: "white", undecided: "yellow" },
            game3: { playing: "white", notPlaying: "white", undecided: "yellow" }
        }

        newPlayer.save(function(err) {
            if(err) {
                return res.json({ hasErrors: true, errors: [err] });
            }
            else {
                return res.json({ hasErrors: false, errors: [] });
            }
        });
    }
});

app.put("/updatePlayer/:playerId/game/:gameId", function(req, res) {
    Player.findOne({_id: req.params.playerId}, function(err, player) {
        if(err) {
            return res.json({ hasErrors: true, errors: [err] });
        }
        else {
            var game = "game" + req.params.gameId;
            var newStatus = player.status;
            newStatus[game] = req.body;
            player.status = [];
            player.status = newStatus;
            
            player.save(function(err) {
                if(err) {
                    return res.json({ hasErrors: true, errors: [err] });
                }
                else {
                    return res.json({ hasErrors: false, errors: [], player: player });
                }
            });
        }
    });
})

app.delete("/deletePlayer/:id", function(req, res) {
    Player.remove({_id: req.params.id}, function(err) {
        if(err) {
            return res.json({ hasErrors: true, errors: [err] });
        }
        else {
            return res.json({ hasErrors: false, errors: [] });
        }
    })
})


app.all("*", (req,res,next) => {
    return res.sendFile(path.resolve("./public/dist/public/index.html"));
});


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});