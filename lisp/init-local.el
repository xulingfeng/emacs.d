;;; package --- Summary
;;; Commentary:



;;;config for web-mode
(require 'web-mode)

;;; Code:
(add-to-list 'auto-mode-alist '("\\.dust\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.ftl\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.hbs\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.vm\\'" . web-mode))
(setq web-mode-engines-alist
      '(("dust"    . "\\.dust\\'")
        ("handlebars" . "\\.hbs\\'")
        ("velocity" . "\\.vm\\'")
        ("freemarker" . "\\.ftl\\'")))
(defun my-web-mode-hook ()
  "Hooks for Web mode."
  (setq web-mode-markup-indent-offset 2)
  (setq web-mode-css-indent-offset 2)
  (setq web-mode-code-indent-offset 2)
  (setq web-mode-style-padding 2)
  (setq web-mode-script-padding 2)
  (setq web-mode-block-padding 2))

(add-hook 'web-mode-hook  'my-web-mode-hook)

(require 'editorconfig)
(editorconfig-mode 1)

;;; ls-mode
                                        ;(require 'livescript-mode)
                                        ;(define-key livescript-mode-map "\C-c\C-l" 'livescript-compile-buffer)

                                        ;(add-hook 'flycheck-mode-hook #'flycheck-rust-setup)

;;; font theme
(set-frame-font "-*-Monaco-normal-normal-normal-*-14-*-*-*-m-0-iso10646-1" nil t)
(setq darkokai-mode-line-padding 1) ;; Default mode-line box width
(load-theme 'darkokai t)

;; (use-package ensime
;;              :commands ensime ensime-mode)

(add-hook 'scala-mode-hook 'ensime-mode)
(add-hook 'markdown-mode-hook 'pandoc-mode)

(provide 'init-local)
;;; init-local.el ends here
