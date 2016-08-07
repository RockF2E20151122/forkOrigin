Last login: Thu Aug  4 16:02:52 on ttys008
LM-SHC-16501205:spa dihwang$ cd /Users/dihwang/workspace/feature/forks/app-common/ui-war/src/main/spa
LM-SHC-16501205:spa dihwang$ ls
Gruntfile.js		build-tmp		grunt-tasks		i18n			modules			package.json		styles
build			common			grunt_config.json	images			node_modules		scripts			uc
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   modules/global_header/scripts/global_header_menuDefinition.js
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git diff modules/global_header/scripts/global_header_menuDefinition.js 
diff --git a/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js b/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
index 2daacbd..dcb1a32 100644
--- a/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
+++ b/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
@@ -308,12 +308,6 @@ define(
                 titleKey: 'common.global_header.footer.advertising.title',
                 contentKey: 'common.global_header.footer.advertising.title'
             },
-            'partners': {
-                id: 'header-partners',
-                href: '/partners/',
-                title: 'common.global_header.footer.partners.title',
-                contentKey: 'common.global_header.footer.partners.title'
-            },
             'jobs': {
                 id: 'header-jobs',
                 href: {
@@ -553,8 +547,7 @@ define(
                         footerMenus.contactUs,
                         footerMenus.adChoice,
                         footerMenus.jobs,
-                        footerMenus.legal,
-                        footerMenus.partners
+                        footerMenus.legal
                     ]
                 },
                 'col2': {
@@ -958,6 +951,18 @@ define(
                 }
             }
         };
+        
+        // S: sell link
+        // just in case of releasing issue, will remove after:
+         // 0.app-sellhub be released
+           // 1.sell link related DB switch ready
+           // 2.the switch('.sellapp.enableSellLinkRelease') been removed;
+        var enableSellLink = SHGlobal.getFeatureValue('gs.features.' + SHGlobal.getSiteId() + '.sellapp.enableSellLinkRelease', 'boolean');
+        if (enableSellLink) {
+           delete FR_Menu.headerMenu['header-sell-menu'];
+           delete MX_Menu.headerMenu['header-sell-menu'];
+        }
+        // E: sell link 
 
         return {
             'en-us': US_Menu,
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   modules/global_header/scripts/global_header_menuDefinition.js
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git pull
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git branch
  develop
* feature/sellLink
LM-SHC-16501205:spa dihwang$ git merge develop
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git checkout develop
error: Your local changes to the following files would be overwritten by checkout:
	ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
Please, commit your changes or stash them before you can switch branches.
Aborting
LM-SHC-16501205:spa dihwang$ git branch
  develop
* feature/sellLink
LM-SHC-16501205:spa dihwang$ git stash
Saved working directory and index state WIP on feature/sellLink: 755343d Merge branch 'develop' into feature/sellLink
HEAD is now at 755343d Merge branch 'develop' into feature/sellLink
LM-SHC-16501205:spa dihwang$ git checkout develop
Switched to branch 'develop'
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git pull
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git remote -vv
origin	git@github.corp.ebay.com:dihwang/app-common.git (fetch)
origin	git@github.corp.ebay.com:dihwang/app-common.git (push)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (fetch)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (push)
LM-SHC-16501205:spa dihwang$ git pull upstream
remote: Counting objects: 145, done.
remote: Compressing objects: 100% (127/127), done.
remote: Total 145 (delta 63), reused 5 (delta 4), pack-reused 0
Receiving objects: 100% (145/145), 17.85 KiB | 0 bytes/s, done.
Resolving deltas: 100% (63/63), completed with 4 local objects.
From github.corp.ebay.com:Stubhub/app-common
 * [new branch]      bug/apcom-1607 -> upstream/bug/apcom-1607
 * [new branch]      bug/globalHeaderLoginState -> upstream/bug/globalHeaderLoginState
   1152e45..11a35a7  develop    -> upstream/develop
   746d51d..3118168  feature/redirection-url-rules -> upstream/feature/redirection-url-rules
 * [new branch]      hotfix/APCOM-1718 -> upstream/hotfix/APCOM-1718
 * [new branch]      hotfix/loginfix -> upstream/hotfix/loginfix
 * [new branch]      hotfix/proxy-signin -> upstream/hotfix/proxy-signin
   53a43a2..b6f81b8  master     -> upstream/master
   aa7be1e..849012d  release/4.5.0 -> upstream/release/4.5.0
 * [new branch]      revert-2361-hotfix/APCOM-1718 -> upstream/revert-2361-hotfix/APCOM-1718
 * [new tag]         com.stubhub.appcommon.ui-war-4.4.2 -> com.stubhub.appcommon.ui-war-4.4.2
You asked to pull from the remote 'upstream', but did not specify
a branch. Because this is not the default configured remote
for your current branch, you must specify a branch on the command line.
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git branch
* develop
  feature/sellLink
LM-SHC-16501205:spa dihwang$ git checkout feature/sellLink
Switched to branch 'feature/sellLink'
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
LM-SHC-16501205:spa dihwang$ git merge develop
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git stash pop
On branch feature/sellLink
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   modules/global_header/scripts/global_header_menuDefinition.js
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (bdfbbf6c94beaabd0388017e307630cdcd642386)
LM-SHC-16501205:spa dihwang$ git diff modules/*
diff --git a/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js b/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
index 2daacbd..dcb1a32 100644
--- a/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
+++ b/ui-war/src/main/spa/modules/global_header/scripts/global_header_menuDefinition.js
@@ -308,12 +308,6 @@ define(
                 titleKey: 'common.global_header.footer.advertising.title',
                 contentKey: 'common.global_header.footer.advertising.title'
             },
-            'partners': {
-                id: 'header-partners',
-                href: '/partners/',
-                title: 'common.global_header.footer.partners.title',
-                contentKey: 'common.global_header.footer.partners.title'
-            },
             'jobs': {
                 id: 'header-jobs',
                 href: {
@@ -553,8 +547,7 @@ define(
                         footerMenus.contactUs,
                         footerMenus.adChoice,
                         footerMenus.jobs,
-                        footerMenus.legal,
-                        footerMenus.partners
+                        footerMenus.legal
                     ]
                 },
                 'col2': {
@@ -958,6 +951,18 @@ define(
                 }
             }
         };
+        
+        // S: sell link
+        // just in case of releasing issue, will remove after:
+         // 0.app-sellhub be released
+           // 1.sell link related DB switch ready
+           // 2.the switch('.sellapp.enableSellLinkRelease') been removed;
+        var enableSellLink = SHGlobal.getFeatureValue('gs.features.' + SHGlobal.getSiteId() + '.sellapp.enableSellLinkRelease', 'boolean');
+        if (enableSellLink) {
+           delete FR_Menu.headerMenu['header-sell-menu'];
+           delete MX_Menu.headerMenu['header-sell-menu'];
+        }
+        // E: sell link 
 
         return {
             'en-us': US_Menu,
LM-SHC-16501205:spa dihwang$ git reflog -4
755343d HEAD@{0}: checkout: moving from develop to feature/sellLink
1152e45 HEAD@{1}: checkout: moving from feature/sellLink to develop
755343d HEAD@{2}: merge develop: Merge made by the 'recursive' strategy.
ed0515a HEAD@{3}: checkout: moving from feature/selllink to feature/sellLink
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is ahead of 'origin/feature/sellLink' by 54 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   modules/global_header/scripts/global_header_menuDefinition.js
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git add modules/global_header/scripts/global_header_menuDefinition.js 
LM-SHC-16501205:spa dihwang$ git commit -m 'add toggle for releasing app-common'
[feature/sellLink 1ead223] add toggle for releasing app-common
 1 file changed, 13 insertions(+), 8 deletions(-)
LM-SHC-16501205:spa dihwang$ git push 
Counting objects: 20, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (18/18), done.
Writing objects: 100% (20/20), 1.79 KiB | 0 bytes/s, done.
Total 20 (delta 12), reused 0 (delta 0)
To git@github.corp.ebay.com:dihwang/app-common.git
   ed0515a..1ead223  feature/sellLink -> feature/sellLink
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is up-to-date with 'origin/feature/sellLink'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is up-to-date with 'origin/feature/sellLink'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git staus
git: 'staus' is not a git command. See 'git --help'.

Did you mean this?
	status
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is up-to-date with 'origin/feature/sellLink'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git remote -v
origin	git@github.corp.ebay.com:dihwang/app-common.git (fetch)
origin	git@github.corp.ebay.com:dihwang/app-common.git (push)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (fetch)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (push)
LM-SHC-16501205:spa dihwang$ git branch
  develop
* feature/sellLink
LM-SHC-16501205:spa dihwang$ git branch -r
  origin/4.3.4
  origin/4.40
  origin/APCOM-1343
  origin/HEAD -> origin/develop
  origin/Hotfix/4.3.3
  origin/Hotfix/4.3.7
  origin/Hotfix/apcom-1056
  origin/bug/globalHeaderLoginState
  origin/bugfix/apcom-1477
  origin/bugfix/apcom-1516
  origin/bugfix/https-for-geo
  origin/bugfix/loginModalErrors
  origin/bugfix/optinRefresh
  origin/bugfix/ua2fa
  origin/develop
  origin/documentation
  origin/feature/APCOM-1217
  origin/feature/MergeLoginErrors
  origin/feature/ROI-image
  origin/feature/SUI-2
  origin/feature/UC-SFR
  origin/feature/add-event-interest
  origin/feature/apcom-1218
  origin/feature/blueNewErrors
  origin/feature/brand-toggle
  origin/feature/card-click
  origin/feature/card-migration
  origin/feature/fbWidget
  origin/feature/fbtrack
  origin/feature/fixdyepath
  origin/feature/grunt-single-build-on-watch
  origin/feature/intl-7225
  origin/feature/intsus-1234
  origin/feature/notification-label-change
  origin/feature/optin_junhao
  origin/feature/optin_switch
  origin/feature/parking-pass
  origin/feature/parking-pass-2
  origin/feature/searchEnchance
  origin/feature/sellLink
  origin/feature/seo2
  origin/feature/sfr-uc
  origin/feature/shil-2FA
  origin/feature/socialSigninConnectView
  origin/feature/splunkLogging
  origin/feature/submarine
  origin/feature/ticket-out
  origin/feature/ticket-out-demo
  origin/feature/ui-pkg
  origin/hotfix/4.3.5
  origin/hotfix/4.3.6
  origin/hotfix/4.3.8
  origin/hotfix/apcom-1477
  origin/hotfix/loginfix
  origin/hotfix/proxy-signin
  origin/integration/intl
  origin/integration/intl_bakup
  origin/master
  origin/release/4.2.0
  origin/release/4.3.0
  origin/release/4.4.0
  origin/revert-2190-feature/intsus-1234
  origin/revert-2197-feature/card-click
  origin/revert-2265-hotfix/4.3.6
  upstream/4.3.4
  upstream/APCOM-1343
  upstream/Bug/APCOM-1579
  upstream/Bug/apcom-1607
  upstream/Bug/globalHeaderLoginState
  upstream/Hotfix/4.3.7
  upstream/Hotfix/4.4.1
  upstream/Hotfix/APCOM-1718
  upstream/Hotfix/loginfix
  upstream/Hotfix/proxy-signin
  upstream/SUI-2
  upstream/bugfix/apcom-1516
  upstream/bugfix/https-for-geo
  upstream/bugfix/loginModalErrors
  upstream/bugfix/optinRefresh
  upstream/bugfix/ua2fa
  upstream/develop
  upstream/documentation
  upstream/feature/APCOM-1205
  upstream/feature/APCOM-1217
  upstream/feature/INTEXP-2259
  upstream/feature/MergeLoginErrors
  upstream/feature/ROI-image
  upstream/feature/SI-1747
  upstream/feature/SUI-2
  upstream/feature/apcom-1218
  upstream/feature/apcom-1581
  upstream/feature/blueNewErrors
  upstream/feature/brand-lowercase
  upstream/feature/brand-toggle
  upstream/feature/bugfix
  upstream/feature/card-click
  upstream/feature/card-migration
  upstream/feature/fixBrandToggle
  upstream/feature/fixdyepath
  upstream/feature/global-header
  upstream/feature/intl-7225
  upstream/feature/intsus-1234
  upstream/feature/login76ers
  upstream/feature/mergedTest
  upstream/feature/notification-label-change
  upstream/feature/optin_junhao
  upstream/feature/optin_switch
  upstream/feature/parking-pass
  upstream/feature/parking-pass-2
  upstream/feature/redirection-url-rules
  upstream/feature/searchEnchance
  upstream/feature/sfr-1451
  upstream/feature/shil-2FA
  upstream/feature/socialSigninConnectView
  upstream/feature/splunkLogging
  upstream/feature/submarine
  upstream/feature/ticket-out
  upstream/feature/ui-pkg
  upstream/integration/intl
  upstream/master
  upstream/release/4.5.0
  upstream/revert-2190-feature/intsus-1234
  upstream/revert-2197-feature/card-click
  upstream/revert-2361-hotfix/APCOM-1718
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git stats
git: 'stats' is not a git command. See 'git --help'.

Did you mean this?
	status
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink
Your branch is up-to-date with 'origin/feature/sellLink'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git checkout origin integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ ls
Gruntfile.js		build-tmp		grunt-tasks		i18n			modules			package.json		styles
build			common			grunt_config.json	images			node_modules		scripts			uc
LM-SHC-16501205:spa dihwang$ git branch
  develop
* feature/sellLink
LM-SHC-16501205:spa dihwang$ git checkout develop
M	ui-war/src/main/spa/package.json
Switched to branch 'develop'
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
LM-SHC-16501205:spa dihwang$ git branch -r
  origin/4.3.4
  origin/4.40
  origin/APCOM-1343
  origin/HEAD -> origin/develop
  origin/Hotfix/4.3.3
  origin/Hotfix/4.3.7
  origin/Hotfix/apcom-1056
  origin/bug/globalHeaderLoginState
  origin/bugfix/apcom-1477
  origin/bugfix/apcom-1516
  origin/bugfix/https-for-geo
  origin/bugfix/loginModalErrors
  origin/bugfix/optinRefresh
  origin/bugfix/ua2fa
  origin/develop
  origin/documentation
  origin/feature/APCOM-1217
  origin/feature/MergeLoginErrors
  origin/feature/ROI-image
  origin/feature/SUI-2
  origin/feature/UC-SFR
  origin/feature/add-event-interest
  origin/feature/apcom-1218
  origin/feature/blueNewErrors
  origin/feature/brand-toggle
  origin/feature/card-click
  origin/feature/card-migration
  origin/feature/fbWidget
  origin/feature/fbtrack
  origin/feature/fixdyepath
  origin/feature/grunt-single-build-on-watch
  origin/feature/intl-7225
  origin/feature/intsus-1234
  origin/feature/notification-label-change
  origin/feature/optin_junhao
  origin/feature/optin_switch
  origin/feature/parking-pass
  origin/feature/parking-pass-2
  origin/feature/searchEnchance
  origin/feature/sellLink
  origin/feature/seo2
  origin/feature/sfr-uc
  origin/feature/shil-2FA
  origin/feature/socialSigninConnectView
  origin/feature/splunkLogging
  origin/feature/submarine
  origin/feature/ticket-out
  origin/feature/ticket-out-demo
  origin/feature/ui-pkg
  origin/hotfix/4.3.5
  origin/hotfix/4.3.6
  origin/hotfix/4.3.8
  origin/hotfix/apcom-1477
  origin/hotfix/loginfix
  origin/hotfix/proxy-signin
  origin/integration/intl
  origin/integration/intl_bakup
  origin/master
  origin/release/4.2.0
  origin/release/4.3.0
  origin/release/4.4.0
  origin/revert-2190-feature/intsus-1234
  origin/revert-2197-feature/card-click
  origin/revert-2265-hotfix/4.3.6
  upstream/4.3.4
  upstream/APCOM-1343
  upstream/Bug/APCOM-1579
  upstream/Bug/apcom-1607
  upstream/Bug/globalHeaderLoginState
  upstream/Hotfix/4.3.7
  upstream/Hotfix/4.4.1
  upstream/Hotfix/APCOM-1718
  upstream/Hotfix/loginfix
  upstream/Hotfix/proxy-signin
  upstream/SUI-2
  upstream/bugfix/apcom-1516
  upstream/bugfix/https-for-geo
  upstream/bugfix/loginModalErrors
  upstream/bugfix/optinRefresh
  upstream/bugfix/ua2fa
  upstream/develop
  upstream/documentation
  upstream/feature/APCOM-1205
  upstream/feature/APCOM-1217
  upstream/feature/INTEXP-2259
  upstream/feature/MergeLoginErrors
  upstream/feature/ROI-image
  upstream/feature/SI-1747
  upstream/feature/SUI-2
  upstream/feature/apcom-1218
  upstream/feature/apcom-1581
  upstream/feature/blueNewErrors
  upstream/feature/brand-lowercase
  upstream/feature/brand-toggle
  upstream/feature/bugfix
  upstream/feature/card-click
  upstream/feature/card-migration
  upstream/feature/fixBrandToggle
  upstream/feature/fixdyepath
  upstream/feature/global-header
  upstream/feature/intl-7225
  upstream/feature/intsus-1234
  upstream/feature/login76ers
  upstream/feature/mergedTest
  upstream/feature/notification-label-change
  upstream/feature/optin_junhao
  upstream/feature/optin_switch
  upstream/feature/parking-pass
  upstream/feature/parking-pass-2
  upstream/feature/redirection-url-rules
  upstream/feature/searchEnchance
  upstream/feature/sfr-1451
  upstream/feature/shil-2FA
  upstream/feature/socialSigninConnectView
  upstream/feature/splunkLogging
  upstream/feature/submarine
  upstream/feature/ticket-out
  upstream/feature/ui-pkg
  upstream/integration/intl
  upstream/master
  upstream/release/4.5.0
  upstream/revert-2190-feature/intsus-1234
  upstream/revert-2197-feature/card-click
  upstream/revert-2361-hotfix/APCOM-1718
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git branch
* develop
  feature/sellLink
LM-SHC-16501205:spa dihwang$ git branch -r
  origin/4.3.4
  origin/4.40
  origin/APCOM-1343
  origin/HEAD -> origin/develop
  origin/Hotfix/4.3.3
  origin/Hotfix/4.3.7
  origin/Hotfix/apcom-1056
  origin/bug/globalHeaderLoginState
  origin/bugfix/apcom-1477
  origin/bugfix/apcom-1516
  origin/bugfix/https-for-geo
  origin/bugfix/loginModalErrors
  origin/bugfix/optinRefresh
  origin/bugfix/ua2fa
  origin/develop
  origin/documentation
  origin/feature/APCOM-1217
  origin/feature/MergeLoginErrors
  origin/feature/ROI-image
  origin/feature/SUI-2
  origin/feature/UC-SFR
  origin/feature/add-event-interest
  origin/feature/apcom-1218
  origin/feature/blueNewErrors
  origin/feature/brand-toggle
  origin/feature/card-click
  origin/feature/card-migration
  origin/feature/fbWidget
  origin/feature/fbtrack
  origin/feature/fixdyepath
  origin/feature/grunt-single-build-on-watch
  origin/feature/intl-7225
  origin/feature/intsus-1234
  origin/feature/notification-label-change
  origin/feature/optin_junhao
  origin/feature/optin_switch
  origin/feature/parking-pass
  origin/feature/parking-pass-2
  origin/feature/searchEnchance
  origin/feature/sellLink
  origin/feature/seo2
  origin/feature/sfr-uc
  origin/feature/shil-2FA
  origin/feature/socialSigninConnectView
  origin/feature/splunkLogging
  origin/feature/submarine
  origin/feature/ticket-out
  origin/feature/ticket-out-demo
  origin/feature/ui-pkg
  origin/hotfix/4.3.5
  origin/hotfix/4.3.6
  origin/hotfix/4.3.8
  origin/hotfix/apcom-1477
  origin/hotfix/loginfix
  origin/hotfix/proxy-signin
  origin/integration/intl
  origin/integration/intl_bakup
  origin/master
  origin/release/4.2.0
  origin/release/4.3.0
  origin/release/4.4.0
  origin/revert-2190-feature/intsus-1234
  origin/revert-2197-feature/card-click
  origin/revert-2265-hotfix/4.3.6
  upstream/4.3.4
  upstream/APCOM-1343
  upstream/Bug/APCOM-1579
  upstream/Bug/apcom-1607
  upstream/Bug/globalHeaderLoginState
  upstream/Hotfix/4.3.7
  upstream/Hotfix/4.4.1
  upstream/Hotfix/APCOM-1718
  upstream/Hotfix/loginfix
  upstream/Hotfix/proxy-signin
  upstream/SUI-2
  upstream/bugfix/apcom-1516
  upstream/bugfix/https-for-geo
  upstream/bugfix/loginModalErrors
  upstream/bugfix/optinRefresh
  upstream/bugfix/ua2fa
  upstream/develop
  upstream/documentation
  upstream/feature/APCOM-1205
  upstream/feature/APCOM-1217
  upstream/feature/INTEXP-2259
  upstream/feature/MergeLoginErrors
  upstream/feature/ROI-image
  upstream/feature/SI-1747
  upstream/feature/SUI-2
  upstream/feature/apcom-1218
  upstream/feature/apcom-1581
  upstream/feature/blueNewErrors
  upstream/feature/brand-lowercase
  upstream/feature/brand-toggle
  upstream/feature/bugfix
  upstream/feature/card-click
  upstream/feature/card-migration
  upstream/feature/fixBrandToggle
  upstream/feature/fixdyepath
  upstream/feature/global-header
  upstream/feature/intl-7225
  upstream/feature/intsus-1234
  upstream/feature/login76ers
  upstream/feature/mergedTest
  upstream/feature/notification-label-change
  upstream/feature/optin_junhao
  upstream/feature/optin_switch
  upstream/feature/parking-pass
  upstream/feature/parking-pass-2
  upstream/feature/redirection-url-rules
  upstream/feature/searchEnchance
  upstream/feature/sfr-1451
  upstream/feature/shil-2FA
  upstream/feature/socialSigninConnectView
  upstream/feature/splunkLogging
  upstream/feature/submarine
  upstream/feature/ticket-out
  upstream/feature/ui-pkg
  upstream/integration/intl
  upstream/master
  upstream/release/4.5.0
  upstream/revert-2190-feature/intsus-1234
  upstream/revert-2197-feature/card-click
  upstream/revert-2361-hotfix/APCOM-1718
LM-SHC-16501205:spa dihwang$ git branch
* develop
  feature/sellLink
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

no changes added to commit (use "git add" and/or "git commit -a")
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git stash
Saved working directory and index state WIP on develop: 1152e45 Merge pull request #2332 from zweinstock/feature/card-migration
HEAD is now at 1152e45 Merge pull request #2332 from zweinstock/feature/card-migration
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git branch -a
* develop
  feature/sellLink
  remotes/origin/4.3.4
  remotes/origin/4.40
  remotes/origin/APCOM-1343
  remotes/origin/HEAD -> origin/develop
  remotes/origin/Hotfix/4.3.3
  remotes/origin/Hotfix/4.3.7
  remotes/origin/Hotfix/apcom-1056
  remotes/origin/bug/globalHeaderLoginState
  remotes/origin/bugfix/apcom-1477
  remotes/origin/bugfix/apcom-1516
  remotes/origin/bugfix/https-for-geo
  remotes/origin/bugfix/loginModalErrors
  remotes/origin/bugfix/optinRefresh
  remotes/origin/bugfix/ua2fa
  remotes/origin/develop
  remotes/origin/documentation
  remotes/origin/feature/APCOM-1217
  remotes/origin/feature/MergeLoginErrors
  remotes/origin/feature/ROI-image
  remotes/origin/feature/SUI-2
  remotes/origin/feature/UC-SFR
  remotes/origin/feature/add-event-interest
  remotes/origin/feature/apcom-1218
  remotes/origin/feature/blueNewErrors
  remotes/origin/feature/brand-toggle
  remotes/origin/feature/card-click
  remotes/origin/feature/card-migration
  remotes/origin/feature/fbWidget
  remotes/origin/feature/fbtrack
  remotes/origin/feature/fixdyepath
  remotes/origin/feature/grunt-single-build-on-watch
  remotes/origin/feature/intl-7225
  remotes/origin/feature/intsus-1234
  remotes/origin/feature/notification-label-change
  remotes/origin/feature/optin_junhao
  remotes/origin/feature/optin_switch
  remotes/origin/feature/parking-pass
  remotes/origin/feature/parking-pass-2
  remotes/origin/feature/searchEnchance
  remotes/origin/feature/sellLink
  remotes/origin/feature/seo2
  remotes/origin/feature/sfr-uc
  remotes/origin/feature/shil-2FA
  remotes/origin/feature/socialSigninConnectView
  remotes/origin/feature/splunkLogging
  remotes/origin/feature/submarine
  remotes/origin/feature/ticket-out
  remotes/origin/feature/ticket-out-demo
  remotes/origin/feature/ui-pkg
  remotes/origin/hotfix/4.3.5
  remotes/origin/hotfix/4.3.6
  remotes/origin/hotfix/4.3.8
  remotes/origin/hotfix/apcom-1477
  remotes/origin/hotfix/loginfix
  remotes/origin/hotfix/proxy-signin
  remotes/origin/integration/intl
  remotes/origin/integration/intl_bakup
  remotes/origin/master
  remotes/origin/release/4.2.0
  remotes/origin/release/4.3.0
  remotes/origin/release/4.4.0
  remotes/origin/revert-2190-feature/intsus-1234
  remotes/origin/revert-2197-feature/card-click
  remotes/origin/revert-2265-hotfix/4.3.6
  remotes/upstream/4.3.4
  remotes/upstream/APCOM-1343
  remotes/upstream/Bug/APCOM-1579
  remotes/upstream/Bug/apcom-1607
  remotes/upstream/Bug/globalHeaderLoginState
  remotes/upstream/Hotfix/4.3.7
  remotes/upstream/Hotfix/4.4.1
  remotes/upstream/Hotfix/APCOM-1718
  remotes/upstream/Hotfix/loginfix
  remotes/upstream/Hotfix/proxy-signin
  remotes/upstream/SUI-2
  remotes/upstream/bugfix/apcom-1516
  remotes/upstream/bugfix/https-for-geo
  remotes/upstream/bugfix/loginModalErrors
  remotes/upstream/bugfix/optinRefresh
  remotes/upstream/bugfix/ua2fa
  remotes/upstream/develop
  remotes/upstream/documentation
  remotes/upstream/feature/APCOM-1205
  remotes/upstream/feature/APCOM-1217
  remotes/upstream/feature/INTEXP-2259
  remotes/upstream/feature/MergeLoginErrors
  remotes/upstream/feature/ROI-image
  remotes/upstream/feature/SI-1747
  remotes/upstream/feature/SUI-2
  remotes/upstream/feature/apcom-1218
  remotes/upstream/feature/apcom-1581
  remotes/upstream/feature/blueNewErrors
  remotes/upstream/feature/brand-lowercase
  remotes/upstream/feature/brand-toggle
  remotes/upstream/feature/bugfix
  remotes/upstream/feature/card-click
  remotes/upstream/feature/card-migration
  remotes/upstream/feature/fixBrandToggle
  remotes/upstream/feature/fixdyepath
  remotes/upstream/feature/global-header
  remotes/upstream/feature/intl-7225
  remotes/upstream/feature/intsus-1234
  remotes/upstream/feature/login76ers
  remotes/upstream/feature/mergedTest
  remotes/upstream/feature/notification-label-change
  remotes/upstream/feature/optin_junhao
  remotes/upstream/feature/optin_switch
  remotes/upstream/feature/parking-pass
  remotes/upstream/feature/parking-pass-2
  remotes/upstream/feature/redirection-url-rules
  remotes/upstream/feature/searchEnchance
  remotes/upstream/feature/sfr-1451
  remotes/upstream/feature/shil-2FA
  remotes/upstream/feature/socialSigninConnectView
  remotes/upstream/feature/splunkLogging
  remotes/upstream/feature/submarine
  remotes/upstream/feature/ticket-out
  remotes/upstream/feature/ui-pkg
  remotes/upstream/integration/intl
  remotes/upstream/master
  remotes/upstream/release/4.5.0
  remotes/upstream/revert-2190-feature/intsus-1234
  remotes/upstream/revert-2197-feature/card-click
  remotes/upstream/revert-2361-hotfix/APCOM-1718
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
error: pathspec 'integration/intl' did not match any file(s) known to git.
LM-SHC-16501205:spa dihwang$ git remote -vv
origin	git@github.corp.ebay.com:dihwang/app-common.git (fetch)
origin	git@github.corp.ebay.com:dihwang/app-common.git (push)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (fetch)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (push)
LM-SHC-16501205:spa dihwang$ git checkout -b integration/intl --track upstream/integration/intl
Branch integration/intl set up to track remote branch integration/intl from upstream.
Switched to a new branch 'integration/intl'
LM-SHC-16501205:spa dihwang$ git status
On branch integration/intl
Your branch is up-to-date with 'upstream/integration/intl'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git pull
remote: Counting objects: 11, done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 11 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (11/11), done.
From github.corp.ebay.com:Stubhub/app-common
 * [new branch]      bug/apcom-1607 -> upstream/bug/apcom-1607
 * [new branch]      bug/globalHeaderLoginState -> upstream/bug/globalHeaderLoginState
   79bbb28..e2cafbf  feature/fixBrandToggle -> upstream/feature/fixBrandToggle
 * [new branch]      hotfix/APCOM-1718 -> upstream/hotfix/APCOM-1718
 * [new branch]      hotfix/loginfix -> upstream/hotfix/loginfix
 * [new branch]      hotfix/proxy-signin -> upstream/hotfix/proxy-signin
Already up-to-date.
LM-SHC-16501205:spa dihwang$ vi .bashrc
LM-SHC-16501205:spa dihwang$ vi source ~/git-completion.bash
2 files to edit
LM-SHC-16501205:spa dihwang$ vi ~/.source ~/git-completion.bash
2 files to edit
LM-SHC-16501205:spa dihwang$ vi ~/.bashrc
LM-SHC-16501205:spa dihwang$ source ~/git-completion.bash
-sh: /Users/dihwang/git-completion.bash: No such file or directory
LM-SHC-16501205:spa dihwang$ vi ~/git-completion.bash
LM-SHC-16501205:spa dihwang$ source ~/git-completion.bash
LM-SHC-16501205:spa dihwang$ git checkout integration/intl
Already on 'integration/intl'
Your branch is up-to-date with 'upstream/integration/intl'.
LM-SHC-16501205:spa dihwang$ git pull
From github.corp.ebay.com:Stubhub/app-common
 * [new branch]      bug/apcom-1607 -> upstream/bug/apcom-1607
 * [new branch]      bug/globalHeaderLoginState -> upstream/bug/globalHeaderLoginState
 * [new branch]      hotfix/APCOM-1718 -> upstream/hotfix/APCOM-1718
 * [new branch]      hotfix/loginfix -> upstream/hotfix/loginfix
 * [new branch]      hotfix/proxy-signin -> upstream/hotfix/proxy-signin
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git checkout develop
Switched to branch 'develop'
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
LM-SHC-16501205:spa dihwang$ git pull
Already up-to-date.
LM-SHC-16501205:spa dihwang$ git branch -vv
* develop          1152e45 [origin/develop: ahead 53] Merge pull request #2332 from zweinstock/feature/card-migration
  feature/sellLink 1ead223 [origin/feature/sellLink] add toggle for releasing app-common
  integration/intl 428792c [upstream/integration/intl] http protocl support
LM-SHC-16501205:spa dihwang$ git checkout upstream/develop 
Note: checking out 'upstream/develop'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 11a35a7... Updating develop branch with Master Snapshot Version 4.4.3-SNAPSHOT
LM-SHC-16501205:spa dihwang$ git status
HEAD detached at upstream/develop
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git status
HEAD detached at upstream/develop
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git checkout develop
Previous HEAD position was 11a35a7... Updating develop branch with Master Snapshot Version 4.4.3-SNAPSHOT
Switched to branch 'develop'
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
LM-SHC-16501205:spa dihwang$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 53 commits.
  (use "git push" to publish your local commits)
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git remote -vv
origin	git@github.corp.ebay.com:dihwang/app-common.git (fetch)
origin	git@github.corp.ebay.com:dihwang/app-common.git (push)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (fetch)
upstream	git@github.corp.ebay.com:Stubhub/app-common.git (push)
LM-SHC-16501205:spa dihwang$ git status
On branch feature/sellLink-fix
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.eslintrc.json
	source

nothing added to commit but untracked files present (use "git add" to track)
LM-SHC-16501205:spa dihwang$ git push --set-upstream feature/sellLink-fix
fatal: 'feature/sellLink-fix' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

LM-SHC-16501205:spa dihwang$ 
