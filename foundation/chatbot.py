# this is where the file is
from foundation.models import Mapobject,Complaint,IncompleteComplaint
from django.contrib.auth.models import User,AnonymousUser
def hello():
	print "HEllo working"

def getdesp(rec_msg,new_msg,state,mode,complaint_id):
	if mode%2 == 0:
		return "Please type the description of the problem",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		complaint.description=rec_msg
		complaint.save()
		return "Thank you for the description",state+1,mode+1

def getlatlong(rec_msg,new_msg,state,mode,complaint_id):
	if mode%2 == 0:
		return "Give the lat and long in <lat,long> format",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		rec_msg=rec_msg.split(',')
		complaint.latitude=rec_msg[0]
		complaint.longitude=rec_msg[1]
		complaint.save()
		return "Thank you for the location",state+1,mode+1

def chatanswer(rec_msg,new_msg,state,mode,complaint_id):
	msg=""
	if state == 1:
		print "Entered state 1"
		msg,state,mode=getdesp(rec_msg,new_msg,state,mode,complaint_id)
		new_msg=new_msg+msg
	if state == 2:
		print "Entered state 2"
		msg,state,mode=getlatlong(rec_msg,new_msg,state,mode,complaint_id)
		new_msg=new_msg+msg
	# if state == 3:
	# 	print "Entered state 3"
	# 	msg,state,mode=getpic(new_msg,state,mode)
	# 	new_msg=new_msg+msg
	if state == 3:
		new_msg=new_msg+"Thank you for registering your complaint"
		state=4
	return new_msg,state,mode




