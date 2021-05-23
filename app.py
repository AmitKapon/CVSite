from flask import Flask , redirect, url_for,request,render_template

from datetime import datetime

app = Flask(__name__)

@app.route('/main')
@app.route('/home')
@app.route('/')
def AmitCV():
    return render_template('CV.html')

@app.route('/CV')
def cvPage():
    return render_template('AmitCV.html')

@app.route('/contactList')
def contactList():
    return render_template('List-HM7.html')




@app.route('/Assignment8',methods=(['GET','POST']))
def goToAssignment():
    if request.method == 'POST':
        username = request.form["nm"]
        return username

    else:
        return render_template('Assignment8.html')





@app.route('/Assignment8s', methods=(['GET','POST']))
def welcome1():
      username=request.form["nm"]
      hobbies = ['Gaming', 'Wave Surf', 'Playing Piano and Guitar']
      user = 'Amit'
      return render_template('Assignment8s.html',
                             hobbies=hobbies,
                             user=user,
                             username=username
                             )




# 'Assignment8s.html',
#                                username,
#                              hobbies=['Gaming','Wave Surf','Playing music']


if __name__ == '__main__':
    app.run(debug=True)




