from browser import document, window

# Evasion distance threshold
evasion_distance = 100

def move_no_button(event):
    no_btn = document['noBtn']
    mouse_x, mouse_y = event.clientX, event.clientY
    button_x, button_y = no_btn.offsetLeft, no_btn.offsetTop
    button_width = no_btn.offsetWidth
    button_height = no_btn.offsetHeight

    # Calculate center of the button
    button_center_x = button_x + button_width / 2
    button_center_y = button_y + button_height / 2

    # Calculate distance between the mouse and the center of the button
    delta_x = button_center_x - mouse_x
    delta_y = button_center_y - mouse_y
    distance = (delta_x ** 2 + delta_y ** 2) ** 0.5

    # If mouse is close to the "No" button, move it away
    if distance < evasion_distance:
        move_x = delta_x / 2
        move_y = delta_y / 2

        # Move the "No" button away
        no_btn.style.pointerEvents = 'none'  # Disable clicking while evading
        no_btn.style.transform = f'translate({move_x}px, {move_y}px)'
    else:
        # Reset the button if the mouse is no longer near
        no_btn.style.pointerEvents = 'auto'  # Re-enable clicking
        no_btn.style.transform = 'translate(0, 0)'

# Add mouse move event listener
document.bind('mousemove', move_no_button)

# Add event listener for "Yes" button click to change the content
def on_yes_click(event):
    message = document['message']
    message.text = 'Welcome!'
    document['sticker'].style.display = 'none'
    document['yesBtn'].style.display = 'none'
    document['noBtn'].style.display = 'none'

# Bind "Yes" button click
document['yesBtn'].bind('click', on_yes_click)
