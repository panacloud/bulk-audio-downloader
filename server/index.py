from flask import Flask, render_template, send_from_directory, send_file,json,request
import flask
import os
import io
import zipfile

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
#path = "D:\\var\\spool\\asterisk\\monitor"
baseSearchPath = "D:"+os.path.sep+"var"+os.path.sep+"spool"+os.path.sep+"asterisk"+os.path.sep+"monitor"


@app.route("/")
def main():
    #return "Hello World"
    #return send_from_directory('../test', "index.html")
    return render_template("index.html")

@app.route("/search", methods=['POST'])
#@app.route("/search")
def search():
    fileToSearch  = request.form['filename']
    #fileToSearch = "0565099894"
    fileList = searchDirectory(fileToSearch)
    return json.dumps(fileList)
    #return json.dumps(["Hello","World","Data","Test"])


@app.route("/search2", methods=['GET'])
#@app.route("/search")
def search2():
    #filename = request.form['filename']
    fileToSearch = "0565099894"
    fileList = searchDirectory(fileToSearch)
    return json.dumps(fileList)
    #return json.dumps(["Hello","World","Data","Test"])


def searchDirectory(fileToSearch):
    fileList = traverseDirectory(baseSearchPath,fileToSearch)
    #fileList = traverseDirectory2(baseSearchPath, fileToSearch)
    return fileList


def traverseDirectory(baseSearchPath, fileToSearch):
    data = os.walk(baseSearchPath)
    print(data)

    #iterating over file time and then individual files then add required file in list
    finalList = [item[0] + os.path.sep + file for item in data for file in item[2] if fileToSearch in file]
    #finalList = [item[0]+os.path.sep+file for item in data for file in item[2] if file.startswith(fileToSearch)]

    print("-----")
    print(finalList)
    print("-----")
    return finalList

def traverseDirectory2(baseSearchPath, fileToSearch):
    data = os.walk(baseSearchPath)
    for i in data:
        print(i)
        print(i[2])
        verifyFileName(i[2],fileToSearch)

def verifyFileName(filesNameList, fileToSearch):
    for name in filesNameList:
        print(name)
        print(name.find(fileToSearch))
        print(fileToSearch in name)



@app.route("/read")
def reading():
    path_to_file = ["D:\\developmentData\\DeepLearning\\song1.mp4","D:\\developmentData\\DeepLearning\\song2.mp4"]
    for file in path_to_file:
        fileName = file.split("\\")
        return send_file(
            file,
            mimetype="audio/mp4",
            as_attachment=True,
            attachment_filename=fileName[len(fileName)-1])



@app.route("/downloadFile")
def readZipFile():
    memory_file = io.BytesIO()

    with zipfile.ZipFile(memory_file, 'w') as zf:
        #files = ["D:\\developmentData\\DeepLearning\\song1.mp4","D:\\developmentData\\DeepLearning\\song2.mp4"]
        files = searchDirectory("song2.mp4")
        for individualFile in files:
            filePathArray = individualFile.split(os.path.sep)
            fileName = filePathArray[(len(filePathArray))-1]
            data = zipfile.ZipInfo(fileName)
            #data.date_time = time.localtime(time.time())[:6]
            data.compress_type = zipfile.ZIP_DEFLATED
            #zf.writestr(data, individualFile['fileData'])
            with open(individualFile,"rb") as file_object:
                zf.writestr(data,file_object.read())
    memory_file.seek(0)
    return send_file(memory_file, attachment_filename='capsule.zip', as_attachment=True)


@app.route("/downloadFileOld")
def readZipFile2():
    memory_file = io.BytesIO()

    with zipfile.ZipFile(memory_file, 'w') as zf:
        files = ["D:\\developmentData\\DeepLearning\\song1.mp4","D:\\developmentData\\DeepLearning\\song2.mp4"]
        for individualFile in files:
            zf.write(individualFile.split("\\")[3])
    memory_file.seek(0)
    return send_file(memory_file, attachment_filename='capsule.zip', as_attachment=True)


if __name__ == "__main__":
    app.run();