# formOrigin: this is the origin of fork test
when push error:
fatal: Authentication failed for 'https://cengui@github.com/RockWangFE/formOrigin.git/'
solution:
vim .git/config
change url = https://github.com/RockWangFE/formOrigin.git
to url = https:cengui@github.com/RockWangFE/formOrigin.git
