from flask import Flask, render_template, send_from_directory
import flask

#app = Flask(__name__, static_url_path='/test');

#app = Flask(__name__,
#            static_url_path='',
#            template_folder='../test',
#            static_folder='../test');

app = Flask(__name__,
            static_url_path='',
            template_folder='../client/build',
            static_folder='../client/build');



#, static_url_path='/static'

print(flask.__version__)

@app.route("/")
def hello():
    #return "Hello World"
    #return send_from_directory('../test', "index.html")
    return render_template("index.html")

@app.route("/read")
def reading():
    with open('D:\\developmentData\\DeepLearning\\text.txt') as file_object:
        contents = file_object.read()
    print(contents)
    return "Hello World file reading done"

if __name__ == "__main__":
    app.run();