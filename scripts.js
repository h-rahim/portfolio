<script>
  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      const content = detail.querySelector(':not(summary)');
      if (detail.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
</script>
