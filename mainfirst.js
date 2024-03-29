//((java-mode
  .
//  ((eval
    .
    (progn
      (defun my/point-in-defun-declaration-p ()
        (let ((bod (save-excursion (c-beginning-of-defun)
                                   (point))))
          (<= bod
              (point)
              (save-excursion (goto-char bod)
                              (re-search-forward "{")
                              (point)))))

      (defun my/is-string-concatenation-p ()
        "Returns true if the previous line is a string concatenation"
        (save-excursion
          (let ((start (point)))
            (forward-line -1)
            (if (re-search-forward " \\\+$" start t) t nil))))


//ppipopipo yes

            root = true

[*]
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space

[*.gradle]
ij_continuation_indent_size = 2
indent_size = 2
max_line_length = 150

[*.md]
max_line_length = 80

[*.groovy]
indent_size = 4
ij_continuation_indent_size = 4
max_line_length = 140
ij_groovy_class_count_to_use_import_on_demand = 999
ij_groovy_names_count_to_use_import_on_demand = 999
ij_groovy_imports_layout = *,|,com.**,|,org.**,|,java.**,javax.**,|,$*
