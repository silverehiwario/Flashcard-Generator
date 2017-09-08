

function ClozeCard (text, cloze) {

  // To ensure users get the result of a new call, even if they forget.
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard (text, cloze);
  }

  // Otherwise, proceed as usual.
  this.text = text;

  this.cloze = cloze;

  this.partial =function(){
                     var str = this.text;
                     var res = str.replace(this.cloze, "______");
                     return (res);

                        }
                      };


 console.log (new ClozeCard("text", "cloze") instanceof ClozeCard);

ClozeCard();


module.exports = ClozeCard;