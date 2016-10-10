window.onload = function()
{
    document.getElementById("load-articles").addEventListener('click', function ()
    {
        var hidden_articles = document.getElementsByClassName('hidden');

        // Since the array shrinks over time we need the original length.
        var hidden_articles_length = hidden_articles.length;

        for (var i = 0; i < hidden_articles_length; i++)
        {
            /* 
            Each iteration we must show the first element in the array because each iteration
            results in the array becoming smaller by removing the first element.
            That is why we use [0] rather than [i]
            */

            // Removes the all classes except for 'question'
            hidden_articles[0].className = "question";
        }

        // Hide the load-articles button
        this.className = "hidden";
    }); 
}