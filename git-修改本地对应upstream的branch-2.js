Last login: Fri Aug  5 09:52:35 on ttys008
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git branch -vv
* develop          1152e45 [origin/develop: ahead 53] Merge pull request #2332 from zweinstock/feature/card-migration
  feature/sellLink 1ead223 [origin/feature/sellLink] add toggle for releasing app-common
  integration/intl 428792c [upstream/integration/intl] http protocl support
LM-SHC-16501205:spa dihwang$ git checkout feature/sellLink
Switched to branch 'feature/sellLink'
Your branch is up-to-date with 'origin/feature/sellLink'.
LM-SHC-16501205:spa dihwang$ git branch -D develop
Deleted branch develop (was 1152e45).
LM-SHC-16501205:spa dihwang$ git branch
* feature/sellLink
  integration/intl
LM-SHC-16501205:spa dihwang$ git checkout -b develop --track upstream/develop
Branch develop set up to track remote branch develop from upstream.
Switched to a new branch 'develop'
LM-SHC-16501205:spa dihwang$ git branch -vv
* develop          11a35a7 [upstream/develop] Updating develop branch with Master Snapshot Version 4.4.3-SNAPSHOT
  feature/sellLink 1ead223 [origin/feature/sellLink] add toggle for releasing app-common
  integration/intl 428792c [upstream/integration/intl] http protocl support
LM-SHC-16501205:spa dihwang$ git pull
From github.corp.ebay.com:Stubhub/app-common
 * [new branch]      bug/apcom-1607 -> upstream/bug/apcom-1607
 * [new branch]      bug/globalHeaderLoginState -> upstream/bug/globalHeaderLoginState
 * [new branch]      hotfix/APCOM-1718 -> upstream/hotfix/APCOM-1718
 * [new branch]      hotfix/loginfix -> upstream/hotfix/loginfix
 * [new branch]      hotfix/proxy-signin -> upstream/hotfix/proxy-signin
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
Switched to branch 'integration/intl'
Your branch is up-to-date with 'upstream/integration/intl'.
LM-SHC-16501205:spa dihwang$ git merge develop
Removing ui-war/src/main/spa/modules/card/tests/func/card.html
Removing ui-war/src/main/spa/modules/card/templates/simple_card.dust
Removing ui-war/src/main/spa/modules/card/templates/list_card_1.dust
Removing ui-war/src/main/spa/modules/card/templates/event_details.dust
Removing ui-war/src/main/spa/modules/card/templates/card.dust
Removing ui-war/src/main/spa/modules/card/templates/ad_card.dust
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/simple_card.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_2.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_1.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/hero_card.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/event_details.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/card.scss
Removing ui-war/src/main/spa/modules/card/styles/ticket-out/ad_card.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/simple_card.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/list_card_2.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/list_card_1.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/hero_card.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/event_details.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/card.scss
Removing ui-war/src/main/spa/modules/card/styles/blue_new/ad_card.scss
Removing ui-war/src/main/spa/modules/card/scripts/views/card_view.js
Removing ui-war/src/main/spa/modules/card/scripts/models/card_model.js
Removing ui-war/src/main/spa/modules/card/scripts/card.js
Removing ui-war/src/main/spa/modules/card/scripts/card-config.js
Removing ui-war/src/main/spa/modules/card/package.json
Removing ui-war/src/main/spa/modules/card/images/photo_overlay_pattern.png
Removing ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/simple_card.properties
Removing ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/list_card_1.properties
Removing ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/event_details.properties
Removing ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/card.properties
Removing ui-war/src/main/spa/modules/card/i18n/es-mx/templates/simple_card.properties
Removing ui-war/src/main/spa/modules/card/i18n/es-mx/templates/list_card_1.properties
Removing ui-war/src/main/spa/modules/card/i18n/es-mx/templates/event_details.properties
Removing ui-war/src/main/spa/modules/card/i18n/es-mx/templates/card.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-us/templates/simple_card.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-us/templates/list_card_1.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-us/templates/event_details.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-us/templates/card.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-gb/templates/simple_card.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-gb/templates/list_card_1.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-gb/templates/event_details.properties
Removing ui-war/src/main/spa/modules/card/i18n/en-gb/templates/card.properties
Removing ui-war/src/main/spa/modules/card/i18n/de-de/templates/simple_card.properties
Removing ui-war/src/main/spa/modules/card/i18n/de-de/templates/list_card_1.properties
Removing ui-war/src/main/spa/modules/card/i18n/de-de/templates/event_details.properties
Removing ui-war/src/main/spa/modules/card/i18n/de-de/templates/card.properties
Removing ui-war/src/main/spa/modules/card/README.md
Removing ui-war/src/main/spa/modules/card/Gruntfile.js
Removing ui-war/src/main/spa/modules/card/CHANGELOG.md
Merge made by the 'recursive' strategy.
 docs/components/sharing_and_loading_strategy.md                                      |  85 +++++++++++++++++--------------
 ui-war/pom.xml                                                                       |   2 +-
 ui-war/src/main/spa/grunt_config.json                                                |   1 -
 ui-war/src/main/spa/modules/card/CHANGELOG.md                                        |   5 --
 ui-war/src/main/spa/modules/card/Gruntfile.js                                        |  11 ----
 ui-war/src/main/spa/modules/card/README.md                                           |   2 -
 ui-war/src/main/spa/modules/card/i18n/de-de/templates/card.properties                |   4 --
 ui-war/src/main/spa/modules/card/i18n/de-de/templates/event_details.properties       |   7 ---
 ui-war/src/main/spa/modules/card/i18n/de-de/templates/list_card_1.properties         |   6 ---
 ui-war/src/main/spa/modules/card/i18n/de-de/templates/simple_card.properties         |   3 --
 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/card.properties                |   4 --
 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/event_details.properties       |   7 ---
 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/list_card_1.properties         |   6 ---
 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/simple_card.properties         |   3 --
 ui-war/src/main/spa/modules/card/i18n/en-us/templates/card.properties                |   4 --
 ui-war/src/main/spa/modules/card/i18n/en-us/templates/event_details.properties       |   7 ---
 ui-war/src/main/spa/modules/card/i18n/en-us/templates/list_card_1.properties         |   6 ---
 ui-war/src/main/spa/modules/card/i18n/en-us/templates/simple_card.properties         |   3 --
 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/card.properties                |   4 --
 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/event_details.properties       |   7 ---
 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/list_card_1.properties         |   6 ---
 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/simple_card.properties         |   3 --
 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/card.properties                |   4 --
 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/event_details.properties       |   7 ---
 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/list_card_1.properties         |   6 ---
 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/simple_card.properties         |   3 --
 ui-war/src/main/spa/modules/card/images/photo_overlay_pattern.png                    | Bin 444 -> 0 bytes
 ui-war/src/main/spa/modules/card/package.json                                        |  18 -------
 ui-war/src/main/spa/modules/card/scripts/card-config.js                              |  16 ------
 ui-war/src/main/spa/modules/card/scripts/card.js                                     | 112 ----------------------------------------
 ui-war/src/main/spa/modules/card/scripts/models/card_model.js                        |  49 ------------------
 ui-war/src/main/spa/modules/card/scripts/views/card_view.js                          | 289 -------------------------------------------------------------------------------------------------------
 ui-war/src/main/spa/modules/card/styles/blue_new/ad_card.scss                        |  18 -------
 ui-war/src/main/spa/modules/card/styles/blue_new/card.scss                           |   6 ---
 ui-war/src/main/spa/modules/card/styles/blue_new/event_details.scss                  |  95 ----------------------------------
 ui-war/src/main/spa/modules/card/styles/blue_new/hero_card.scss                      | 184 -----------------------------------------------------------------
 ui-war/src/main/spa/modules/card/styles/blue_new/list_card_1.scss                    |  97 -----------------------------------
 ui-war/src/main/spa/modules/card/styles/blue_new/list_card_2.scss                    |  98 -----------------------------------
 ui-war/src/main/spa/modules/card/styles/blue_new/simple_card.scss                    |  40 ---------------
 ui-war/src/main/spa/modules/card/styles/ticket-out/ad_card.scss                      |  18 -------
 ui-war/src/main/spa/modules/card/styles/ticket-out/card.scss                         |   6 ---
 ui-war/src/main/spa/modules/card/styles/ticket-out/event_details.scss                | 101 ------------------------------------
 ui-war/src/main/spa/modules/card/styles/ticket-out/hero_card.scss                    | 220 ------------------------------------------------------------------------------
 ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_1.scss                  | 105 --------------------------------------
 ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_2.scss                  | 107 --------------------------------------
 ui-war/src/main/spa/modules/card/styles/ticket-out/simple_card.scss                  |  43 ----------------
 ui-war/src/main/spa/modules/card/templates/ad_card.dust                              |   1 -
 ui-war/src/main/spa/modules/card/templates/card.dust                                 |  99 -----------------------------------
 ui-war/src/main/spa/modules/card/templates/event_details.dust                        |  29 -----------
 ui-war/src/main/spa/modules/card/templates/list_card_1.dust                          |  27 ----------
 ui-war/src/main/spa/modules/card/templates/simple_card.dust                          |  10 ----
 ui-war/src/main/spa/modules/card/tests/func/card.html                                | 178 ---------------------------------------------------------------
 ui-war/src/main/spa/modules/date-stamp/templates/date_stamp_template.dust            |   2 +-
 ui-war/src/main/spa/modules/global_header/i18n/en-us/common/global_header.properties |   1 +
 ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js    |   9 +++-
 ui-war/src/main/spa/modules/login/scripts/models/connect-social-model.js             |   3 +-
 ui-war/src/main/spa/modules/login/scripts/models/forgotpassword-model.js             |   3 +-
 ui-war/src/main/spa/modules/login/scripts/models/signin-model.js                     |   3 +-
 ui-war/src/main/spa/modules/login/scripts/models/signin-proxy-model.js               |   3 +-
 ui-war/src/main/spa/modules/login/scripts/views/createpassword-view.js               |  33 +++++++++---
 ui-war/src/main/spa/modules/login/scripts/views/login-base-view.js                   |  20 ++++++--
 ui-war/src/main/spa/modules/login/scripts/views/register-view.js                     |  24 ++++++---
 ui-war/src/main/spa/modules/login/scripts/views/resetpassword-view.js                |   4 +-
 ui-war/src/main/spa/modules/login/scripts/views/signin-view.js                       |  24 +++++----
 ui-war/src/main/spa/modules/login/styles/blue_new/login.scss                         |   6 ++-
 ui-war/src/main/spa/modules/login/styles/ticket-out/login.scss                       |   8 ++-
 ui-war/src/main/spa/package.json                                                     |   3 +-
 ui-war/src/main/spa/uc/index.html                                                    |  21 ++++----
 68 files changed, 166 insertions(+), 2173 deletions(-)
 delete mode 100644 ui-war/src/main/spa/modules/card/CHANGELOG.md
 delete mode 100644 ui-war/src/main/spa/modules/card/Gruntfile.js
 delete mode 100644 ui-war/src/main/spa/modules/card/README.md
 delete mode 100755 ui-war/src/main/spa/modules/card/i18n/de-de/templates/card.properties
 delete mode 100755 ui-war/src/main/spa/modules/card/i18n/de-de/templates/event_details.properties
 delete mode 100755 ui-war/src/main/spa/modules/card/i18n/de-de/templates/list_card_1.properties
 delete mode 100755 ui-war/src/main/spa/modules/card/i18n/de-de/templates/simple_card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/event_details.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/list_card_1.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-gb/templates/simple_card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-us/templates/card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-us/templates/event_details.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-us/templates/list_card_1.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/en-us/templates/simple_card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/event_details.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/list_card_1.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/es-mx/templates/simple_card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/event_details.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/list_card_1.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/i18n/fr-fr/templates/simple_card.properties
 delete mode 100644 ui-war/src/main/spa/modules/card/images/photo_overlay_pattern.png
 delete mode 100644 ui-war/src/main/spa/modules/card/package.json
 delete mode 100644 ui-war/src/main/spa/modules/card/scripts/card-config.js
 delete mode 100644 ui-war/src/main/spa/modules/card/scripts/card.js
 delete mode 100644 ui-war/src/main/spa/modules/card/scripts/models/card_model.js
 delete mode 100644 ui-war/src/main/spa/modules/card/scripts/views/card_view.js
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/ad_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/event_details.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/hero_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/list_card_1.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/list_card_2.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/blue_new/simple_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/ad_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/event_details.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/hero_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_1.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/list_card_2.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/styles/ticket-out/simple_card.scss
 delete mode 100644 ui-war/src/main/spa/modules/card/templates/ad_card.dust
 delete mode 100644 ui-war/src/main/spa/modules/card/templates/card.dust
 delete mode 100644 ui-war/src/main/spa/modules/card/templates/event_details.dust
 delete mode 100644 ui-war/src/main/spa/modules/card/templates/list_card_1.dust
 delete mode 100644 ui-war/src/main/spa/modules/card/templates/simple_card.dust
 delete mode 100644 ui-war/src/main/spa/modules/card/tests/func/card.html
LM-SHC-16501205:spa dihwang$ git push
Counting objects: 9, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 784 bytes | 0 bytes/s, done.
Total 9 (delta 5), reused 0 (delta 0)
To git@github.corp.ebay.com:Stubhub/app-common.git
   428792c..d6c424a  integration/intl -> integration/intl
LM-SHC-16501205:spa dihwang$ git status
On branch integration/intl
Your branch is up-to-date with 'upstream/integration/intl'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git branch
  develop
  feature/sellLink
* integration/intl
LM-SHC-16501205:spa dihwang$ git checkout feature/sellLink
Switched to branch 'feature/sellLink'
Your branch is up-to-date with 'origin/feature/sellLink'.
LM-SHC-16501205:spa dihwang$ git checkout develop
Switched to branch 'develop'
Your branch is up-to-date with 'upstream/develop'.
LM-SHC-16501205:spa dihwang$ git checkout -b feature/sellLink-fix
Switched to a new branch 'feature/sellLink-fix'
LM-SHC-16501205:spa dihwang$ git
