@shift /0
@echo off

set PATH=jdk\jre\bin
set JRE_HOME=jdk\jre
set JAVA_HOME=jdk\jre\bin
set CLASSPATH=.;dist\*
java -server -Dnet.sf.odinms.wzpath=wz gui.ZEVMS
pause